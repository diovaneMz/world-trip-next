import { Box, Flex, Heading, Text, Grid } from "@chakra-ui/react";
import { ContinentInfos } from "@/components/ContinentInfos";
import { CityCard } from "@/components/CityCard";
import { GetStaticPaths, GetStaticProps } from "next";
import { api } from "@/api/api";

interface ContinentDataProps {
  continents: {
    continent: string;
    continentImg: string;
    countries: {
      country: string;
      code: string;
      cities: {
        imgUrl: string;
        city: string;
      }[];
    }[];
  }[];
}

function Continent({ apiResponse }: { apiResponse: any }) {
  console.log(apiResponse)
  
  return (
    <Flex flexDir="column">
      <Flex
        backgroundImage={`url(${"https://images.unsplash.com/photo-1516926133025-705ee504386d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"})`}
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
            Amewrica
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
            A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a
            península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste
            pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso,
            e o mar Negro a sudeste.
          </Text>
        </Box>
        <ContinentInfos dataInfo={[50, 60, 27]} />
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
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
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
  
  const apiResponse = await api.get("continents").then((resp) => resp.data.filter(item => accentRemover(item.continent) === context.params?.Continent));

  return {
    props: {
      apiResponse,
    },
  };
};
