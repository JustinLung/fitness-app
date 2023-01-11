import { Card, CardBody, Text, Image, Heading, Link, Flex } from "@chakra-ui/react";
import { theme } from '../styles/theme'

interface ExerciseProps {
    cardName: string;
    cardDescription: string;
    cardImage: string;
    cardTime: number;
    cardLink: string;
}

export default function FitCard({
    cardName,
    cardDescription,
    cardImage,
    cardTime,
    cardLink,
}: ExerciseProps) {
    return (
        <Link href={cardLink} textDecor="none" _hover={{ textDecor: "none" }}>
            <Card as="article" scrollSnapAlign="center" w="90vw" bg={theme.colors.white} color={theme.colors.black}>
                <Image src={cardImage} borderRadius=".2rem" w="100%" h="20rem" objectFit="cover" />
                <CardBody px={4}>
                    <Heading as="h3" size="md" maxW="15rem">{cardName}</Heading>
                    <Flex>
                        <Text whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" maxW="15rem">{cardDescription}</Text>
                        <Text ml="auto">{cardTime} Min</Text>
                    </Flex>
                </CardBody>
            </Card>
        </Link>
    );
}
