import { Heading, Text, Box } from "@chakra-ui/react"

export default function Profile() {
    return (
        <>
            <Box as="section" maxW={{ base: "90vw", md: "50vw" }} mx="auto" mt={5}>
                <Heading as="h2" fontSize="2xl">Create</Heading>
                <Text>Create a workout or a meal.</Text>
            </Box>
        </>
    )
}