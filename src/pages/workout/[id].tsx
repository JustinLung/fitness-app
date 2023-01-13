import { Heading, Flex, Image, Text, Container, Box } from "@chakra-ui/react"
import DetailHeader from "../../components/detailComponents/DetailHeader";
import { GraphQLClient } from "graphql-request";
import { workoutIdQuery } from "../../lib/queries";

export default function WorkoutId({ workout }: any) {
    return (
        <>
            <DetailHeader />
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
                            <Flex justifyContent="space-between" mt={2} key={exercise.id}>
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