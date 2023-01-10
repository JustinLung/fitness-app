import { GraphQLClient } from "graphql-request";
import { Text } from "@chakra-ui/react";
import { workoutsQuery, mealsQuery } from "../lib/queries";
import FitCard from "../components/Card";
import CardSlider from "../components/CardSlider";

export default function Home({ workouts, meals }: any) {
  return (
    <>
      <CardSlider cardSectionHeading="Featured Workouts" cardSectionLink="/workouts">
        {workouts.length === 0 ? (
          <Text>No workouts yet</Text>
        ) : workouts.map((workout: any) => {
          return (
            <FitCard
              key={workout.id}
              cardLink={`/workout/${workout.id}`}
              cardName={workout.workoutTitle}
              cardDescription={workout.workoutDescription}
              cardImage={workout.workoutImage.url}
              cardTime={workout.workoutTime}
            />
          )
        })}
      </CardSlider>
      <CardSlider cardSectionHeading="Featured Meals" cardSectionLink="/meals">
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
      </CardSlider>
    </>
  );
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