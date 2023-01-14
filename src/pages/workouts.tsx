import { GraphQLClient } from "graphql-request"
import { Text } from "@chakra-ui/react"
import Search from "../components/Search"
import FitCard from "../components/Card"
import FitSection from "../components/FitSection"
import { workoutsQuery, mealsQuery } from "../lib/queries"

export default function Workouts({ workouts }: any) {
    return (
        <>
            <Search searchPlaceholder="Search for a workout" />
            <FitSection fitSectionTitle="Get Your Pump In" fitSectionDescription="All workouts ready to use.">
                {workouts.length === 0 ? (
                    <Text>No workouts yet</Text>
                ) : workouts.map((workout: any) => {
                    return (
                        <FitCard
                            cardDificulty={workout.difficulty}
                            key={workout.id}
                            cardLink={`/workout/${workout.id}`}
                            cardName={workout.workoutTitle}
                            cardDescription={workout.workoutDescription}
                            cardImage={workout.workoutImage.url}
                            cardTime={workout.workoutTime}
                        />
                    )
                })}
            </FitSection>
        </>
    )
}

export async function getServerSideProps() {
    const hygraph = new GraphQLClient(
        // @ts-ignore
        process.env.HYGRAPH_ENDPOINT
    )

    const { workouts } = await hygraph.request(workoutsQuery);
    const { meals } = await hygraph.request(mealsQuery)

    return {
        props: {
            workouts,
            meals
        }
    }
}