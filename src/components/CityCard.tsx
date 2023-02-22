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

interface CityCardProps {
  city: string;
  code: string;
  country: string;
  imgUrl: string;
}

export function CityCard({ city, code, country, imgUrl }: CityCardProps) {
  return (
    <GridItem>
      <Card padding="0">
        <CardBody padding="0">
          <Image
            src={imgUrl}
            borderTopRadius="4px"
            width="20.2143rem"
            height="12.3571rem"
            objectFit='cover'
            
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
                {city}
              </Heading>
              <Text
                textColor="my.darkInfo"
                fontFamily="Barlow"
                fontWeight="medium"
                fontSize="1.1429rem"
                lineHeight="1.8571rem"
              >
                {country}
              </Text>
            </VStack>
            <Flag
              code={code}
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
