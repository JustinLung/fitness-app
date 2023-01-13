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
    cardDificulty: string;
}

export default function FitCard({
    cardName,
    cardDescription,
    cardImage,
    cardTime,
    cardLink,
    cardDificulty
}: ExerciseProps) {
    return (
        <NextLink href={cardLink}>
            <Link textDecor="none" _hover={{ textDecor: "none" }}>
                <Card as="article" scrollSnapAlign="center" w={{ base: "90vw" }} bg={theme.colors.white} color={theme.colors.black}>
                    <Box position="relative">
                        <Image src={cardImage} alt={cardName} borderRadius=".2rem" w="100%" h="15rem" objectFit="cover" />
                        <Text position="absolute" color={theme.colors.white} borderRadius=".2rem" px={4} py={2} bg={theme.colors.black} bottom={4} left={4}>{cardDificulty}</Text>
                    </Box>
                    <CardBody>
                        <Flex alignItems="center" justifyContent="space-between">
                            <Heading as="h3" fontSize="lg" maxW="15rem">{cardName}</Heading>
                            <Text display="flex" alignItems="center" gap={2}>{cardTime} Min</Text>
                        </Flex>
                        <Text whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" maxW="20rem">{cardDescription}</Text>
                    </CardBody>
                </Card>
            </Link>
        </NextLink>
    );
}
