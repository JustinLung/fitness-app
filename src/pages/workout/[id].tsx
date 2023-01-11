import { Heading, Flex, Image, Text, Container, Box, Link } from "@chakra-ui/react"
import { GraphQLClient } from "graphql-request";
import { workoutIdQuery } from "../../lib/queries";

export default function WorkoutId({ workout }: any) {
    return (
        <>
            <Flex as="header" py={3} maxW="90vw" mx="auto">
                <Link href="/">
                    <Image src="/assets/icons/back-icon.svg" />
                </Link>
            </Flex>
            <Box h="20rem" w="100%" as="figure">
                <Image src={workout.workoutImage.url} objectFit="cover" objectPosition="center" w="100%" h="100%" />
            </Box>
            <Flex as="section" flexDir="column" maxW="90vw" mx="auto">
                <Flex justifyContent="space-between" alignItems="center" mt={5}>
                    <Heading size="lg">{workout.workoutTitle}</Heading>
                    <Text>{workout.workoutTime} min</Text>
                </Flex>
                <Text>{workout.workoutDescription}</Text>
                <Container m={0} p={0}>
                    {workout.exercises.map((exercise: any) => {
                        return (
                            <Flex justifyContent="space-between" mt={2}>
                                <Text>{exercise.exerciseTitle}</Text>
                                <Text>{exercise.exerciseSet} Sets {exercise.exerciseReps} Reps</Text>
                            </Flex>
                        )
                    })}
                </Container>
            </Flex>
        </>
    )
}

export async function getServerSideProps({ query }: any) {
    const hygraph = new GraphQLClient(
        // @ts-ignore
        process.env.HYGRAPH_ENDPOINT
    )
    const { workout } = await hygraph.request(workoutIdQuery, { id: query.id });

    return {
        props: {
            workout
        }
    }
}