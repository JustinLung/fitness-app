import { Heading, Flex, Image, Text, List, ListItem, Link } from "@chakra-ui/react"
import { GraphQLClient } from "graphql-request";
import { mealIdQuery } from "../../lib/queries";
import { useEffect } from "react";

export default function MealId({ meal }: any) {
    useEffect(() => {
        console.log(meal)
    })
    return (
        <>
            <Flex as="header" py={3} maxW="90vw" mx="auto">
                <Link href="/">
                    <Image src="/assets/icons/back-icon.svg" />
                </Link>
            </Flex>
            <Image src={meal.mealImage.url}></Image>
            <Flex as="section" flexDir="column" maxW="90vw" mx="auto">
                <Heading size="lg" pt={4}>{meal.mealTitle}</Heading>
                <Text py={4}>{meal.mealDescription}</Text>
                <List display="flex" flexWrap="wrap" gap=".2rem">
                    <ListItem>{meal.macros.calories} Calories</ListItem>
                    <ListItem>{meal.macros.proteine} Proteine</ListItem>
                    <ListItem>{meal.macros.fat} Fat</ListItem>
                    <ListItem>{meal.macros.carbs} Carbs</ListItem>
                </List>
                <Text>Preperation Time: {meal.preperationTime} min</Text>
                <Text>Total Time: {meal.time} min</Text>
                <List pt={3} _before={{
                    content: '"Ingredients"', fontWeight: "bold", fontSize: "1.5rem"
                }}>
                    {meal.ingredient.map((ingredient: any) => {
                        return (
                            <ListItem listStyleType="disc" ml="1rem">{ingredient.ingredient}</ListItem>
                        )
                    })}
                </List>
                <List pt={3} _before={{
                    content: '"Method of Preparation"', fontWeight: "bold", fontSize: "1.5rem"
                }}>
                    {meal.methodOfPreperations.map((method: any) => {
                        return (
                            <ListItem listStyleType="disc" ml="1rem">{method.method}</ListItem>
                        )
                    })}
                </List>
            </Flex>
        </>
    )
}

export async function getServerSideProps({ query }: any) {
    const hygraph = new GraphQLClient(
        // @ts-ignore
        process.env.HYGRAPH_ENDPOINT
    )
    const { meal } = await hygraph.request(mealIdQuery, { id: query.id });

    return {
        props: {
            meal
        }
    }
}