import { Heading, Text, Box } from "@chakra-ui/react"
import { theme } from '../../src/styles/theme'

export default function Profile() {
    return (
        <>
            <Box as="section" maxW="90vw" mx="auto" mt={5}>
                <Heading as="h2" fontSize="2xl">Personal Bests</Heading>
                <Text>Fill in your personal bests</Text>
            </Box>
        </>
    )
}