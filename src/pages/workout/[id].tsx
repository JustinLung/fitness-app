import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Heading,
    Box,
    Text,
} from '@chakra-ui/react'
import DetailHero from '../../components/detailComponents/DetailHero';
import { GraphQLClient } from "graphql-request";
import { workoutIdQuery } from "../../lib/queries";
import PageTransition from '../../components/PageTransition';

export default function WorkoutId({ workout }: any) {
    return (
        <PageTransition>
            <DetailHero heroImage={workout.workoutImage.url} />
            <Box w={{ base: "90vw", md: "50vw" }} mx="auto" py={5}>
                <Heading size="lg">{workout.workoutTitle}</Heading>
                <Text>{workout.workoutDescription}</Text>
            </Box>
            <TableContainer maxW={{ base: "90vw", md: "50vw" }} mx="auto" >
                <Table variant='simple' size='sm'>
                    <Thead>
                        <Tr>
                            <Th color={"orange"} px={0}>Exercises</Th>
                            <Th color={"orange"} px={0} isNumeric>Sets</Th>
                            <Th color={"orange"} px={0} isNumeric>Reps</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {workout.exercises.map((exercise: any) => {
                            return (
                                <Tr key={exercise.id}>
                                    <Td p={0}>{exercise.exerciseTitle}</Td>
                                    <Td isNumeric px={0}>{exercise.exerciseSet}</Td>
                                    <Td isNumeric px={0}>{exercise.exerciseReps}</Td>
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
            </TableContainer >
        </PageTransition>
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