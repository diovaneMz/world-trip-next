import { Box, Flex, Heading, Text, Grid } from "@chakra-ui/react";
import { ContinentInfos } from "@/components/ContinentInfos";
import { CityCard } from "@/components/CityCard";
import { GetStaticPaths, GetStaticProps } from "next";
import { api } from "@/api/api";
import { stringify } from "querystring";

interface ContinentDataProps {
  continent: string;
  continentImg: string;
  description: string;
  info: {
    countryCount: string;
    languageCount: string;
  };
  countries: {
    country: string;
    code: string;
    cities: {
      imgUrl: string;
      city: string;
    }[];
  }[];
}

function Continent({ data }: { data: ContinentDataProps }) {
  function getTop100Cities() {
    let initialValue = 0;

    const count = data.countries.reduce((accumulator, country) => {
      const cityCount = country.cities.length;

      return accumulator + cityCount;
    }, initialValue);

    return JSON.stringify(count);
  }

  return (
    <Flex flexDir="column">
      <Flex
        backgroundImage={`url(${data.continentImg})`}
        backgroundPosition="center"
        backgroundSize={{ base: "150%", md: "120%", lg: "100%" }}
        width="100%"
      >
        <Flex
          width="100%"
          backgroundColor="rgba(0, 0, 0, .35)"
          justify={{ base: "center", lg: "flex-start" }}
        >
          <Heading
            textColor="my.ligthText"
            fontWeight="semibold"
            fontSize={{ base: "2rem", lg: "3.4286rem" }}
            lineHeight={{ base: "3rem", lg: "5.1429rem" }}
            padding={{ base: "4rem 0", lg: "26.3571rem 0 4.2143rem" }}
            maxWidth={{ lg: "82.8571rem" }}
            marginInline={{ lg: "auto" }}
            width={{ lg: "100%" }}
          >
            {data.continent}
          </Heading>
        </Flex>
      </Flex>
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        justify="space-between"
        gap={{ base: "1.1429rem", lg: "5rem" }}
        margin={{
          base: "1.7143rem 1.1429rem 2.2857rem 1.1429rem",
          lg: "5.7143rem auto",
        }}
        maxWidth="82.8571rem"
        width={{ base: "initial", lg: "100%" }}
      >
        <Box maxWidth={{ lg: "42.8571rem" }}>
          <Text
            textColor="my.darkText"
            fontWeight="normal"
            fontSize={{ base: "1rem", lg: "1.7143rem" }}
            lineHeight={{ base: "1.5rem", lg: "2.5714rem" }}
            textAlign="justify"
          >
            {data.description}
          </Text>
        </Box>
        <ContinentInfos
          dataInfo={[data.info.countryCount, data.info.languageCount, getTop100Cities()]}
        />
      </Flex>

      <Box
        maxWidth={{ lg: "82.8571rem" }}
        marginInline={{ base: "1.1429rem", lg: "auto" }}
        width={{ lg: "100%" }}
      >
        <Heading
          marginBottom={{ base: "1.4286rem", lg: "2.8571rem" }}
          textColor="my.darkText"
          fontWeight="medium"
          fontSize={{ base: "1.7143rem", lg: "2.5714rem" }}
          lineHeight={{ base: "2.2857rem", lg: "3.8571rem" }}
        >
          Cidades +100
        </Heading>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }}
          templateRows="auto"
          gap={{ base: "1.4286rem", lg: "3.4286rem" }}
          padding="0 44px"
          marginBottom="20rem"
        >
          {data.countries.map((country) => {
            return country.cities.map((city) => {
              return (
                <CityCard
                  key={city.city}
                  city={city.city}
                  code={country.code}
                  country={country.country}
                  imgUrl={city.imgUrl}
                />
              );
            });
          })}
        </Grid>
      </Box>
    </Flex>
  );
}

export default Continent;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          Continent: "america",
        },
      },
      {
        params: {
          Continent: "europa",
        },
      },
      {
        params: {
          Continent: "asia",
        },
      },
      {
        params: {
          Continent: "africa",
        },
      },
      {
        params: {
          Continent: "oceania",
        },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  function accentRemover(text: string) {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s]/gi, "")
      .toLowerCase();
  }

  const apiResponse = await api
    .get("continents")
    .then((resp) =>
      resp.data.filter(
        (item: ContinentDataProps) =>
          accentRemover(item.continent) === context.params?.Continent
      )
    );

  return {
    props: {
      data: apiResponse[0],
    },
  };
};
