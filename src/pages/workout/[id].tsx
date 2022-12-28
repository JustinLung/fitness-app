import { Heading, Flex, Image, Text, Container } from "@chakra-ui/react"

export default function WorkoutId() {
    return (
        <>
            <Image src="/assets/images/placeholder.png"></Image>
            <Flex as="section" flexDir="column" maxW="90vw" mx="auto">
                <Flex justifyContent="space-between" alignItems="center" mt={5}>
                    <Heading size="lg">Pull Workout</Heading>
                    <Text>60 min</Text>
                </Flex>
                <Text>This pull workout consists of back & bicep exercises.</Text>
                <Container m={0} p={0}>
                    <Flex justifyContent="space-between" mt={2}>
                        <Text>Bicep Curls</Text>
                        <Text>3 Sets 8 Reps</Text>
                    </Flex>
                    <Flex justifyContent="space-between" mt={2}>
                        <Text>Bicep Curls</Text>
                        <Text>3 Sets 8 Reps</Text>
                    </Flex>
                </Container>
            </Flex>
        </>
    )
}