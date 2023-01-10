import { GraphQLClient } from "graphql-request"
import { Text } from "@chakra-ui/react"
import FitCard from "../components/Card"
import FitSection from "../components/FitSection"
import { mealsQuery } from "../lib/queries"

export default function Meals({ meals }: any) {
    return (
        <FitSection fitSectionTitle="Delicious Meals">
            {meals.length === 0 ? (
                <Text>No meal yet</Text>
            ) : meals.map((meal: any) => {
                return (
                    <FitCard
                        key={meal.id}
                        cardLink={`/workout/${meal.id}`}
                        cardName={meal.mealTitle}
                        cardDescription={meal.mealDescription}
                        cardImage={meal.mealImage.url}
                        cardTime={meal.mealTime}
                    />
                )
            })}
        </FitSection>
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