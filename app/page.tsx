"use client"

import { GraphQLClient } from "graphql-request";
import { Text } from "@chakra-ui/react";
import { workoutsLatestQuery, mealsLatestQuery } from "../src/lib/queries";
import FitCard from "../src/components/Card";
import CardSlider from "../src/components/CardSlider";
import { useEffect } from "react";

async function getData() {
  const hygraph = new GraphQLClient(
    // @ts-ignore
    process.env.HYGRAPH_ENDPOINT
  )

  const { workouts } = await hygraph.request(workoutsLatestQuery);
  const { meals } = await hygraph.request(mealsLatestQuery)

  return {
    props: {
      workouts,
      meals
    }
  }
}

export default async function Home({ workouts, meals }: any) {
  useEffect(() => {
    console.log(workouts, meals)
  })
  return (
    <>
      {/* <CardSlider cardSectionHeading="Featured Workouts" cardSectionLink="/workouts" cardSectionSlider={5}>
        {workouts.length === 0 ? (
          <Text>No workouts yet</Text>
        ) : workouts.map((workout: any) => {
          return (
            <FitCard
              key={workout.id}
              cardWidth="80vw"
              cardLink={`/workout/${workout.id}`}
              cardName={workout.workoutTitle}
              cardCategory={workout.workoutCategory}
              cardDescription={workout.workoutDescription}
              cardImage={workout.workoutImage.url}
              cardTime={workout.workoutTime}
              cardDificulty={workout.difficulty}
            />
          )
        })}
      </CardSlider>
      <CardSlider cardSectionHeading="Featured Meals" cardSectionLink="/meals" cardSectionSlider={0}>
        {meals.length === 0 ? (
          <Text>No meal yet</Text>
        ) : meals.map((meal: any) => {
          return (
            <>
              <FitCard
                cardWidth="80vw"
                key={meal.id}
                cardLink={`/meal/${meal.id}`}
                cardName={meal.mealTitle}
                cardDescription={meal.mealDescription}
                cardCategory={meal.mealCategory}
                cardImage={meal.mealImage.url}
                cardTime={meal.time}
                cardDificulty={meal.difficulty}
              />
            </>
          )
        })}
      </CardSlider> */}
      <h1>hello</h1>
    </>
  );
}

// export async function getServerSideProps() {
//   const hygraph = new GraphQLClient(
//     // @ts-ignore
//     process.env.HYGRAPH_ENDPOINT
//   )

//   const { workouts } = await hygraph.request(workoutsLatestQuery);
//   const { meals } = await hygraph.request(mealsLatestQuery)

//   return {
//     props: {
//       workouts,
//       meals
//     }
//   }
// }