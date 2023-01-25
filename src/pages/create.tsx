import { Heading, Text, Box, Flex, FormControl, FormLabel, Input, Textarea, HStack } from "@chakra-ui/react"
import PageTransition from "../components/PageTransition"

export default function Profile() {
    return (
        <PageTransition>
            <Box as="section" maxW={{ base: "90vw", md: "50vw" }} mx="auto" mt={5}>
                <Heading as="h2" fontSize="2xl">Create</Heading>
                <Text>Create a workout or a meal.</Text>
                <Flex
                    gap="1rem"
                    overflowY="auto"
                    overscrollBehaviorX="contain"
                    scrollSnapType="x mandatory"
                    css={{
                        '&::-webkit-scrollbar': {
                            height: '.3rem',
                        },
                        '&::-webkit-scrollbar-track': {
                            height: '.3rem',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            background: "black",
                            borderRadius: '2rem',
                        },
                    }}
                    py={2}
                    mb={5}
                >
                    <FormControl as="form">
                        <FormLabel mt={2} mb={0}>Workout name</FormLabel>
                        <Input type='text' focusBorderColor="orange" placeholder="Enter Workout Name" />
                        <FormLabel mt={2} mb={0}>Workout Description</FormLabel>
                        <Textarea focusBorderColor="orange" h="12rem" resize="none" placeholder="Enter Workout Description" />
                        <Flex mt={2} gap={{ base: 2, md: 3 }} flexDirection={{ base: "column", md: "row" }}>
                            <Box w="100%">
                                <FormLabel>Exercise Name</FormLabel>
                                <Input type="text" placeholder="Enter exercise name..." focusBorderColor="orange" />
                            </Box>
                            <Box w={{ base: "100%", md: "50%" }}>
                                <FormLabel>Sets</FormLabel>
                                <Input type="number" min={0} max={100} placeholder="Enter set number..." focusBorderColor="orange" />
                            </Box>
                            <Box w={{ base: "100%", md: "50%" }}>
                                <FormLabel>Reps</FormLabel>
                                <Input type="number" min={0} max={100} placeholder="Enter rep number..." focusBorderColor="orange" />
                            </Box>
                        </Flex>
                    </FormControl>
                </Flex>
            </Box>
        </PageTransition>
    )
}