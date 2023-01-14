import { Card, CardBody, Text, Image, Heading, Link, Flex, Box } from "@chakra-ui/react";
// import { TimeIcon } from "@chakra-ui/icons";
import NextLink from 'next/link'
import { theme } from '../styles/theme'

interface ExerciseProps {
    cardName: string;
    cardDescription: string;
    cardImage: string;
    cardTime: number;
    cardLink: string;
    cardCategory: string;
    cardDificulty: string;
}

export default function FitCard({
    cardName,
    cardCategory,
    cardImage,
    cardTime,
    cardLink,
    cardDificulty
}: ExerciseProps) {
    return (
        <>
            <NextLink href={cardLink}>
                <Link textDecor="none" _hover={{ textDecor: "none" }}>
                    <Box as="article" w="90vw" h="13rem" scrollSnapAlign="center" position="relative">
                        <Box w="100%" h="100%" bg={theme.colors.blackTransparent} position="absolute" zIndex={2} borderRadius=".5rem" />
                        <Image src={cardImage} alt={cardName} w="100%" h="100%" objectFit="cover" borderRadius=".5rem" />
                        <Flex position="absolute" flexDir="column" top={0} p={4} zIndex={3} color={theme.colors.white} h="100%" w="100%">
                            <Text fontSize="lg" color={theme.colors.orange}>{cardDificulty}</Text>
                            <Heading as="h3" fontSize="2xl" maxW="18rem">{cardName}</Heading>
                            <Text mt="auto">{cardCategory}</Text>
                            <Text>{cardTime} minutes</Text>
                            <Link position="absolute" bottom={4} right={4} bg={theme.colors.black} px={4} py={1} borderRadius="1rem" textDecor="none" _hover={{ textDecor: "none" }}>View</Link>
                        </Flex>
                    </Box>
                </Link>
            </NextLink>
        </>
    );
}
