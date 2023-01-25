import { GraphQLClient } from "graphql-request";
import PageTransition from "../components/PageTransition";
import { Text } from "@chakra-ui/react";
import { workoutsLatestQuery, mealsLatestQuery } from "../lib/queries";
import FitCard from "../components/Card";
import CardSlider from "../components/CardSlider";

export default function Home({ workouts, meals }: any) {
  return (
    <PageTransition>
      <CardSlider cardSectionHeading="Featured Workouts" cardSectionLink="/workouts" cardSectionSlider={5}>
        {workouts.length === 0 ? (
          <Text>No workouts yet</Text>
        ) : workouts.map((workout: any) => {
          return (
            <FitCard
              key={workout.id}
              cardWidth={{
                base: "80vw",
                md: "40vw"
              }}
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
                key={meal.id}
                cardWidth={{
                  base: "80vw",
                  md: "40vw"
                }}
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
      </CardSlider>
    </PageTransition>
  );
}

export async function getServerSideProps() {
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