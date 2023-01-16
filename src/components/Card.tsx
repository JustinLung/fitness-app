import { Text, Image, Heading, Link, Flex, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
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
    cardWidth: string;
}

export default function FitCard({
    cardName,
    cardCategory,
    cardImage,
    cardTime,
    cardLink,
    cardDificulty,
    cardWidth
}: ExerciseProps) {
    return (
        <>
            <Link as={NextLink} href={cardLink} textDecor="none" _hover={{ textDecor: "none" }}>
                <Box as={motion.article} initial="hidden" w={cardWidth} h={{ base: "15rem", md: "30rem" }} scrollSnapAlign="center" position="relative">
                    <Box w="100%" h="100%" bg={theme.colors.blackTransparent} position="absolute" zIndex={2} borderRadius=".5rem" />
                    <Image src={cardImage} alt={cardName} w="100%" h="100%" objectFit="cover" borderRadius=".5rem" />
                    <Flex as="section" position="absolute" flexDir="column" top={0} p={4} zIndex={3} color={theme.colors.white} h="100%" w="100%">
                        <Text fontSize="md" color={theme.colors.orange}>{cardDificulty}</Text>
                        <Heading as="h3" fontSize="2xl" maxW="18rem">{cardName}</Heading>
                        <Text mt="auto" fontSize=".8rem">{cardCategory}</Text>
                        <Text fontSize=".8rem">{cardTime} minutes</Text>
                        <Link as={NextLink} href={cardLink} position="absolute" border="1px solid" borderColor={theme.colors.orange} bottom={4} right={4} bg={theme.colors.orange} px={4} py={1} borderRadius="1rem" textDecor="none" _hover={{ textDecor: "none", bg: "transparent", border: "1px solid", borderColor: theme.colors.orange, color: theme.colors.orange }}>View</Link>
                    </Flex>
                </Box>
            </Link>
        </>
    );
}
