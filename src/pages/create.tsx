import { Heading, Text, Box, Flex, FormControl, FormLabel, Input, Textarea, HStack } from "@chakra-ui/react"
import PageTransition from "../components/PageTransition"

export default function Profile() {
    return (
        <PageTransition>
            <Box as="section" maxW={{ base: "90vw", md: "50vw" }} mx="auto" mt={5}>
                <Heading as="h2" fontSize="2xl">Create</Heading>
                <Text>Create a workout or a meal.</Text>
                {/* <Flex overscrollBehaviorX="contain" scrollSnapType="x mandatory" overflowY="auto">
                    <FormControl as="form">
                        <FormLabel mt={2} mb={0}>Workout name</FormLabel>
                        <Input type='text' focusBorderColor="orange" placeholder="Enter Workout Name" />
                        <FormLabel mt={2} mb={0}>Workout Description</FormLabel>
                        <Textarea focusBorderColor="orange" h="12rem" resize="none" placeholder="Enter Workout Description" />
                    </FormControl>
                </Flex> */}
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
                    <FormControl as="form" >
                        <FormLabel mt={2} mb={0}>Workout name</FormLabel>
                        <Input type='text' focusBorderColor="orange" placeholder="Enter Workout Name" />
                        <FormLabel mt={2} mb={0}>Workout Description</FormLabel>
                        <Textarea focusBorderColor="orange" h="12rem" resize="none" placeholder="Enter Workout Description" />
                        <HStack mt={2}>
                            <Box w="100%">
                                <FormLabel>Exercise Name</FormLabel>
                                <Input></Input>
                            </Box>
                            <Box w="100%">
                                <FormLabel>Sets</FormLabel>
                                <Input></Input>
                            </Box>
                            <Box w="100%">
                                <FormLabel>Reps</FormLabel>
                                <Input></Input>
                            </Box>
                        </HStack>
                    </FormControl>
                </Flex>
            </Box>
        </PageTransition>
    )
}