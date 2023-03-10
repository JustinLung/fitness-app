import { Box, Heading, Flex, Link } from "@chakra-ui/react";
import NextLink from 'next/link'
import { ReactNode } from "react";

interface CardSectionProps {
  children: ReactNode;
  cardSectionHeading: string;
  cardSectionLink: string;
  cardSectionSlider: number
}

export default function CardSlider({
  children,
  cardSectionHeading,
  cardSectionLink,
  cardSectionSlider
}: CardSectionProps) {
  return (
    <Box as="section" maxW={{ base: "90vw", md: "50vw" }} mx="auto" mb={3} >
      <Flex
        as="header"
        justifyContent="space-between"
        alignItems="center"
        mt={cardSectionSlider}
      >
        <Heading as="h2" size="md">
          {cardSectionHeading}
        </Heading>
        <Link
          backgroundColor={"black"}
          color={"white"}
          border="1px solid black"
          borderRadius="2rem"
          px="1rem"
          py=".2rem"
          as={NextLink}
          href={cardSectionLink}
          _hover={{
            textDecor: "none",
            color: "black",
            backgroundColor: "transparent",
            border: "1px solid",
            borderColor: "black"
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
        css={{
          '&::-webkit-scrollbar': {
            height: '.3rem',
          },
          '&::-webkit-scrollbar-track': {
            height: '.3rem',
          },
          '&::-webkit-scrollbar-thumb': {
            background: "black",
            borderRadius: '2rem',
          },
        }}
        py={2}
        mb={5}
      >
        {children}
      </Flex>
    </Box >
  );
}
