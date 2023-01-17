'use client';

import { GraphQLClient } from "graphql-request"
import { Text, Input } from "@chakra-ui/react"
import Search from "../../src/components/Search"
import Card from "../../src/components/Card"
import FitSection from "../../src/components/FitSection"
import { workoutsQuery, mealsQuery } from "../../src/lib/queries"
import { useState } from "react"
import { theme } from '../../src/styles/theme'

export default function Workouts({ workouts }: any) {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <>
            <Search>
                <Input type="search" placeholder="Search for a workout..." _placeholder={{ color: theme.colors.black }} bg={theme.colors.lightgrey} focusBorderColor={theme.colors.orange} onChange={event => { setSearchTerm(event.target.value) }} />
            </Search>
            <FitSection fitSectionTitle="Get Your Pump In" fitSectionDescription="All workouts ready to use.">
                {workouts.length === 0 ? (
                    <Text>No workouts yet</Text>
                ) : workouts.filter((workouts: any) => {
                    if (searchTerm === "") {
                        return workouts
                    } else if (workouts.workoutTitle.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return workouts
                    }
                }).map((workout: any) => {
                    return (
                        <Card
                            cardWidth="90vw"
                            cardCategory={workout.workoutCategory}
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

// export async function getServerSideProps() {
//     const hygraph = new GraphQLClient(
//         // @ts-ignore
//         process.env.HYGRAPH_ENDPOINT
//     )

//     const { workouts } = await hygraph.request(workoutsQuery);
//     const { meals } = await hygraph.request(mealsQuery)

//     return {
//         props: {
//             workouts,
//             meals
//         }
//     }
// }

