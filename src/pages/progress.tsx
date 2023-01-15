import { Heading, Text, Input, Box } from "@chakra-ui/react"
import { theme } from '../styles/theme'

export default function Profile() {
    return (
        <>
            <Box as="header" py={3} borderBottom="2px solid"
                borderColor={theme.colors.lightgrey}>
                <Heading as="h1" fontSize="xl" textAlign="center">Progress</Heading>
            </Box>
            <Box as="section" maxW="90vw" mx="auto" mt={5}>
                <Heading as="h2" fontSize="md">Personal Bests</Heading>
                <Text>Fill in your personal bests</Text>
            </Box>
        </>
    )
}