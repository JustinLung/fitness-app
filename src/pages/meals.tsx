import { GraphQLClient } from "graphql-request"
import { Text } from "@chakra-ui/react"
import FitCard from "../components/Card"
import FitSection from "../components/FitSection"
import { mealsQuery } from "../lib/queries"
import Search from "../components/Search"

export default function Meals({ meals }: any) {
    return (
        <>
            <Search searchPlaceholder="Search for a delicious meal" />
            <FitSection fitSectionTitle="Delicious Meals" fitSectionDescription="Nice meals for you to try out!">
                {meals.length === 0 ? (
                    <Text>No meal yet</Text>
                ) : meals.map((meal: any) => {
                    return (
                        <FitCard
                            key={meal.id}
                            cardLink={`/meal/${meal.id}`}
                            cardName={meal.mealTitle}
                            cardDescription={meal.mealDescription}
                            cardImage={meal.mealImage.url}
                            cardTime={meal.time}
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

    const { meals } = await hygraph.request(mealsQuery)

    return {
        props: {
            meals
        }
    }
}