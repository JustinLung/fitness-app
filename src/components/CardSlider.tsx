import { Box, Heading, Flex, Link } from "@chakra-ui/react";
import { ReactNode } from "react";

interface CardSectionProps {
  children: ReactNode;
  cardSectionHeading: string;
  cardSectionLink: string;
}

export default function CardSlider({
  children,
  cardSectionHeading,
  cardSectionLink
}: CardSectionProps) {
  return (
    <>
      <Box as="section" maxW="90vw" mx="auto">
        <Flex
          as="header"
          justifyContent="space-between"
          alignItems="center"
          py={3}
        >
          <Heading as="h2" size="lg">
            {cardSectionHeading}
          </Heading>
          <Link
            href={cardSectionLink}
            backgroundColor="#000000"
            color="#ffffff"
            border="1px solid #000000"
            borderRadius="2rem"
            px="1.5rem"
            py=".2rem"
            _hover={{
              textDecor: "none",
              color: "#000000",
              backgroundColor: "transparent",
              border: "1px solid #000000",
            }}
          >
            View All
          </Link>
        </Flex>
        <Flex
          gap="1rem"
          overflowY="auto"
          overscrollBehaviorX="contain"
          scrollSnapType="x mandatory"
        >
          {children}
        </Flex>
      </Box>
    </>
  );
}
