import { Image, Heading, Text, Box } from '@chakra-ui/react'

export default function OfflinePage() {
    return (
        <Box h="90vh" w="100%" my="auto">
            <Image loading="lazy" src="/public/assets/images/offline.svg" alt="Offline" />
            <Heading as="h1" > Connect to the Internet </Heading>
            <Text> You&apos;re offline. Please check your connection.</Text>
        </Box>
    )
}