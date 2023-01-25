import { Heading, Text, Box } from "@chakra-ui/react"
import PageTransition from "../components/PageTransition"

export default function Profile() {
    return (
        <PageTransition>
            <Box as="section" maxW={{ base: "90vw", md: "50vw" }} mx="auto" mt={5}>
                <Heading as="h2" fontSize="2xl">Personal Bests</Heading>
                <Text>Fill in your personal bests</Text>
            </Box>
        </PageTransition>
    )
}