import { Card, CardBody, Text, Image, Heading, Link, Flex } from "@chakra-ui/react";

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
            <Card as="article" scrollSnapAlign="center" w="90vw" >
                <Image src={cardImage} borderRadius=".2rem" />
                <CardBody>
                    <Heading as="h3" size="md">{cardName}</Heading>
                    <Flex>
                        <Text>{cardDescription}</Text>
                        <Text ml="auto">{cardTime} Min</Text>
                    </Flex>
                </CardBody>
            </Card>
        </Link>
    );
}
