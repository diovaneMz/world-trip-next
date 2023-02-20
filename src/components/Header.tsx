import { Button, Center, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { CaretLeft } from "phosphor-react";

export function Header() {
  const router = useRouter();

  return (
    <Center>
      {router.pathname === "/" ? null : (
        <Link href="/">
          <Button
            position="absolute"
            backgroundColor="transparent"
            left={{ base: "1rem", lg: "10rem" }}
            top={{ base: ".9rem", lg: "1.8rem" }}
            padding=".375rem .25rem"
            size="xs"
            _focus={{
              backgroundColor: "transparent",
            }}
          >
            <CaretLeft size="16" />
          </Button>
        </Link>
      )}
      <Image
        src="/assets/worldtrip-logo.svg"
        paddingBlock=".9375rem"
        width={{ base: "5.7857rem", lg: "13.1429rem" }}
      />
    </Center>
  );
}
