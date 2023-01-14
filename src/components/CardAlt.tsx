import { Image, Box, Flex, Heading, Text, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { theme } from '../styles/theme'
interface AltCardProps {
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
    cardImage,
    cardTime,
    cardLink,
    cardCategory,
    cardDificulty }: AltCardProps) {
    return (
        <Link as={NextLink} href={cardLink} _hover={{ textDecor: "none" }}>
            <Flex as="article" h="8rem" w="100%" borderRadius=".2rem" bg={theme.colors.orange} color={theme.colors.white}>
                <Box as="figure" w="40%" h="100%">
                    <Image src={cardImage} alt={cardName} w="100%" h="100%" objectFit="cover" borderTopLeftRadius=".2rem" borderBottomLeftRadius=".2rem" />
                </Box>
                <Box as="section" my="auto" ml={5}>
                    <Text fontSize=".8rem">{cardCategory}</Text>
                    <Heading as="h3" fontSize="md" textTransform="uppercase">{cardName}</Heading>
                    <Flex gap={5}>
                        <Text fontSize=".8rem">{cardTime} mins</Text>
                        <Text fontSize=".8rem">{cardDificulty}</Text>
                    </Flex>
                </Box>
            </Flex>
        </Link>
    )
}
