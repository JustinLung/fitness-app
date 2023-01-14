import { Box, Heading, Flex, Link } from "@chakra-ui/react";
import NextLink from 'next/link'
import { theme } from '../styles/theme'
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
        <NextLink href={cardSectionLink}>
          <Link
            backgroundColor={theme.colors.orange}
            color={theme.colors.white}
            border={`1px solid ${theme.colors.orange}`}
            borderRadius="2rem"
            px="1.5rem"
            py=".2rem"
            _hover={{
              textDecor: "none",
              color: theme.colors.orange,
              backgroundColor: "transparent",
              border: "1px solid",
              borderColor: theme.colors.orange
            }}
          >
            View All
          </Link>
        </NextLink>
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
            background: theme.colors.black,
            borderRadius: '2rem',
          },
        }}
        py={2}
      >
        {children}
      </Flex>
    </Box>
  );
}
