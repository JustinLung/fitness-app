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
import { theme } from '../../styles/theme'

export default function WorkoutId({ workout }: any) {
    return (
        <>
            <DetailHero heroImage={workout.workoutImage.url} />
            <Box w="90vw" mx="auto" py={5}>
                <Heading size="lg">{workout.workoutTitle}</Heading>
                <Text>{workout.workoutDescription}</Text>
            </Box>
            <TableContainer maxW="90vw" mx="auto">
                <Table variant='simple' size='sm'>
                    <Thead>
                        <Tr>
                            <Th color={theme.colors.orange} px={0}>Exercises</Th>
                            <Th color={theme.colors.orange} px={0} isNumeric>Sets</Th>
                            <Th color={theme.colors.orange} px={0} isNumeric>Reps</Th>
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
            </TableContainer>
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