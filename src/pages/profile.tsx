import { Heading, Text, Input, Box } from "@chakra-ui/react"
import { theme } from '../styles/theme'

export default function Profile() {
    return (
        <>
            <Box as="section" maxW="90vw" mx="auto" mt={5}>
                <Heading as="h2" fontSize="2xl">Edit Profile</Heading>
            </Box>
        </>
    )
}