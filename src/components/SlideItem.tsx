import { Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

interface SlideItemProps {
  href: string;
  imageUrl: string;
  continentName: string;
  continentText: string;
}

export function SlideItem({
  href,
  imageUrl,
  continentName,
  continentText,
}: SlideItemProps) {
  return (
    <Link
      href={`./Continent/${href}`}
      style={{
        textDecoration: "none",
      }}
    >
      <Box backgroundSize="150%" backgroundPosition="center" backgroundImage={imageUrl}>
        <Box
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          paddingBlock={{ base: "7.8571rem  5.7857rem", lg: "12.8571rem 11rem" }}
          backgroundColor="rgba(0, 0, 0, .3)"
        >
          <Heading
            as="h2"
            color="my.ligthText"
            fontWeight="bold"
            fontSize={{ base: "1.7143rem", lg: "3.4286rem" }}
            lineHeight={{ base: "2.5714rem", lg: "5.1429rem" }}
          >
            {continentName}
          </Heading>
          <Text
            color="my.lightInfo"
            fontWeight="bold"
            fontSize={{ base: "1rem", lg: "1.7143rem" }}
            lineHeight={{ base: "1.5rem", lg: "2.5714rem" }}
            textAlign="center"
          >
            {continentText}
          </Text>
        </Box>
      </Box>
    </Link>
  );
}
