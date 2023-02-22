import {
  HStack,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
  StackItem,
  Text,
} from "@chakra-ui/react";
import { Info } from "phosphor-react";

interface ContinentInfoProps {
  dataInfo: string[];
}

export function ContinentInfos({ dataInfo }: ContinentInfoProps) {
  return (
    <Stack direction="row" spacing={{base: "auto", lg: '3rem'}} align='center' >
      <StackItem>
        <Text
          as="strong"
          textColor="my.highlight"
          fontWeight="semibold"
          fontSize={{base: "1.7143rem", lg: '3.4286rem'}}
          lineHeight={{base: "2.5714rem", lg: '1.7143rem'}}
        >
          {dataInfo[0]}
        </Text>
        <Text
          textColor="my.darkText"
          fontWeight="normal"
          fontSize="1.2857rem"
          lineHeight="1.9286rem"
        >
          países
        </Text>
      </StackItem>
      <StackItem>
        <Text
          as="strong"
          textColor="my.highlight"
          fontWeight="semibold"
          fontSize={{base: "1.7143rem", lg: '3.4286rem'}}
          lineHeight={{base: "2.5714rem", lg: '1.7143rem'}}
        >
          {dataInfo[1]}
        </Text>
        <Text
          textColor="my.darkText"
          fontWeight="normal"
          fontSize="1.2857rem"
          lineHeight="1.9286rem"
        >
          línguas
        </Text>
      </StackItem>
      <StackItem>
        <Text
          as="strong"
          textColor="my.highlight"
          fontWeight="semibold"
          fontSize={{base: "1.7143rem", lg: '3.4286rem'}}
          lineHeight={{base: "2.5714rem", lg: '1.7143rem'}}
        >
          {dataInfo[2]}
        </Text>
        <HStack>
          <Text
            textColor="my.darkText"
            fontWeight="normal"
            fontSize="1.2857rem"
            lineHeight="1.9286rem"
          >
            Cidades +100
          </Text>
          <Popover>
            <PopoverTrigger>
              <Info size=".7143rem" color="gray" />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverBody>
                As cidades +100 são as cidades que este continente possui que estão entre
                as 100 cidades mais visitadas do mundo.
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </HStack>
      </StackItem>
    </Stack>
  );
}
