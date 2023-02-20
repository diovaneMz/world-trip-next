import { Box, Center, Flex, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import { Slide } from "@/components/Slide";

function Home() {
  return (
    <Flex flexDir="column">
      <Box
        width="100%"
        backgroundImage="/assets/banner-space.png"
        backgroundSize={{ base: "300%", sm: "260%", md: "200%", lg: "134%", xl: "130%" }}
        bgPos="center"
      >
        <Box padding={{ base: "2.2857rem 1.1429rem", xl: "5.7143rem 0 5rem 10rem" }}>
          <Heading
            textColor="my.ligthText"
            fontWeight="medium"
            fontSize={{ base: "1.4286rem", lg: "2.5714rem" }}
            lineHeight={{ base: "2.1429rem", lg: "3.5rem" }}
            marginBottom={{ base: ".5714rem", lg: "1.4286rem" }}
          >
            5 Continentes, <br /> infinitas possibilidades.
          </Heading>
          <Text
            textColor="my.lightInfo"
            fontSize={{ base: "1rem", lg: "1.4286rem" }}
            fontWeight="regular"
            lineHeight={{ base: "1.5rem", lg: "2.1429rem" }}
          >
            Chegou a hora de tirar do papel a viagem <br />
            que você sempre sonhou.
          </Text>
        </Box>
      </Box>
      <Image
        display={{ base: "none", xl: "block" }}
        src="/assets/web-only/banner-airplane.svg"
        padding="5.4286rem 10rem 0 0 "
        position="absolute"
        right="0rem"
      />
      <Grid
        margin={{ base: "2.5714rem auto 2.5714rem", lg: "114px auto 5.7143rem" }}
        templateRows={{ base: "repeat(3, 1fr)", lg: "1fr" }}
        templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(5, 1fr)" }}
        gap={{ base: "1.7857rem", lg: "10rem" }}
      >
        <GridItem
          flexDir={{ base: "row", lg: "column" }}
          display="flex"
          justifyContent={{ base: "initial", lg: "center" }}
          alignItems="center"
        >
          <Image
            src="/assets/web-only/night-life.svg"
            display={{ base: "none", lg: "initial" }}
            marginBottom="1.7143rem"
          />
          <Text
            display={{ base: "initial", lg: "none" }}
            marginRight=".5714rem"
            as="span"
            textColor="my.highlight"
          >
            ●
          </Text>
          vida noturna
        </GridItem>
        <GridItem
          flexDir={{ base: "row", lg: "column" }}
          display="flex"
          justifyContent={{ base: "flex-end", lg: "center" }}
          alignItems="center"
        >
          <Image
            src="/assets/web-only/beach.svg"
            display={{ base: "none", lg: "initial" }}
            marginBottom="1.7143rem"
          />
          <Text
            display={{ base: "initial", lg: "none" }}
            marginRight=".5714rem"
            as="span"
            textColor="my.highlight"
          >
            ●
          </Text>
          praia
        </GridItem>
        <GridItem
          flexDir={{ base: "row", lg: "column" }}
          display="flex"
          justifyContent={{ base: "initial", lg: "center" }}
          alignItems="center"
        >
          <Image
            src="/assets/web-only/modern.svg"
            display={{ base: "none", lg: "initial" }}
            marginBottom="1.7143rem"
          />
          <Text
            display={{ base: "initial", lg: "none" }}
            marginRight=".5714rem"
            as="span"
            textColor="my.highlight"
          >
            ●
          </Text>
          moderno
        </GridItem>
        <GridItem
          flexDir={{ base: "row", lg: "column" }}
          display="flex"
          justifyContent={{ base: "flex-end", lg: "center" }}
          alignItems="center"
        >
          <Image
            src="/assets/web-only/museum.svg"
            display={{ base: "none", lg: "initial" }}
            marginBottom="1.7143rem"
          />
          <Text
            display={{ base: "initial", lg: "none" }}
            marginRight=".5714rem"
            as="span"
            textColor="my.highlight"
          >
            ●
          </Text>
          clássico
        </GridItem>
        <GridItem
          flexDir={{ base: "row", lg: "column" }}
          display="flex"
          colSpan={{ base: 2, lg: 1 }}
          justifyContent={{ base: "center", lg: "center" }}
          alignItems="center"
        >
          <Image
            src="/assets/web-only/world.svg"
            display={{ base: "none", lg: "initial" }}
            marginBottom="1.7143rem"
          />
          <Text
            display={{ base: "initial", lg: "none" }}
            marginRight=".5714rem"
            as="span"
            textColor="my.highlight"
          >
            ●
          </Text>
          e mais...
        </GridItem>
      </Grid>
      <Box width="100%" maxWidth="88.5714rem" marginInline="auto">
        <Center
          as="hr"
          width={{base: "20%", lg: '6.4286rem'}}
          marginInline="auto"
          marginBottom={{base: "1.7143rem", lg: '3.7143rem'}}
          border="1px"
          borderColor="my.darkText"
        />
        <Text
          textAlign="center"
          textColor='my.darkText'
          marginInline="auto"
          marginBottom={{base: "1.4286rem", lg: '3.7143rem'}}
          fontSize={{base: "1.4286rem", lg: '2.5714rem'}}
          lineHeight={{base: "2.1429rem", lg: '3.8571rem'}}
          fontWeight="medium"
        >
          Vamos nessa? <br /> Então escolha seu continente.
        </Text>
        <Slide />
      </Box>
    </Flex>
  );
}

export default Home;
