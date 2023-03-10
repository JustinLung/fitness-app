import { GraphQLClient } from "graphql-request"
import { Text, Input } from "@chakra-ui/react"
import Search from "../components/Search"
import Card from "../components/Card"
import FitSection from "../components/FitSection"
import { mealsQuery } from "../lib/queries"
import { useState } from "react"
import PageTransition from "../components/PageTransition"

export default function Meals({ meals }: any) {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <PageTransition>
            <Search>
                <Input type="search" placeholder="Search for a meal..." _placeholder={{ color: "black" }} bg={"lightgrey"} focusBorderColor={"orange"} onChange={event => { setSearchTerm(event.target.value) }} />
            </Search>
            <FitSection fitSectionTitle="Make some delicious meal" fitSectionDescription="Make some delicious meals for the best gains.">
                {meals.length === 0 ? (
                    <Text>No workouts yet</Text>
                ) : meals.filter((meals: any) => {
                    if (searchTerm == "") {
                        return meals
                    } else if (meals.mealTitle.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return meals
                    }
                }).map((meal: any) => {
                    return (
                        <Card
                            cardWidth={{ base: "90vw", md: "50vw" }}
                            cardCategory={meal.mealCategory}
                            cardDificulty={meal.difficulty}
                            key={meal.id}
                            cardLink={`/meal/${meal.id}`
                            }
                            cardName={meal.mealTitle}
                            cardDescription={meal.mealDescription}
                            cardImage={meal.mealImage.url}
                            cardTime={meal.time}
                        />
                    )
                })}
            </FitSection>
        </PageTransition>
    )
}

export async function getServerSideProps() {
    const hygraph = new GraphQLClient(
        // @ts-ignore
        process.env.HYGRAPH_ENDPOINT
    )

    const { meals } = await hygraph.request(mealsQuery)

    return {
        props: {
            meals
        }
    }
}