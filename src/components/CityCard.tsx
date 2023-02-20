import {
  Card,
  CardBody,
  Heading,
  HStack,
  VStack,
  Text,
  Image,
  GridItem,
} from "@chakra-ui/react";
import Flag from "react-world-flags";

export function CityCard() {
  return (
    <GridItem>
      <Card padding="0">
        <CardBody padding="0">
          <Image
            src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            borderTopRadius="4px"
          />
          <HStack
            borderBottomRadius="4px"
            borderLeft="1px"
            borderBottom="1px"
            borderRight="1px"
            borderColor="my.highlight50"
            padding="1.2857rem 1.7143rem 1.7857rem 1.7143rem"
            spacing="auto"
          >
            <VStack alignItems="flex-start">
              <Heading
                textColor="my.darkText"
                fontFamily="Barlow"
                fontWeight="semibold"
                fontSize="1.4286rem"
                lineHeight="1.7857rem"
              >
                Londres
              </Heading>
              <Text
                textColor="my.darkInfo"
                fontFamily="Barlow"
                fontWeight="medium"
                fontSize="1.1429rem"
                lineHeight="1.8571rem"
              >
                Reino Unido
              </Text>
            </VStack>
            <Flag
              code="BRA"
              style={{
                width: "2.1429rem",
                height: "2.1429rem",
                borderRadius: "999px",
                objectFit: "cover",
              }}
            />
          </HStack>
        </CardBody>
      </Card>
    </GridItem>
  );
}
