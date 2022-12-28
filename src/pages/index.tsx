import FitCard from "../components/Card";
import CardSlider from "../components/CardSlider";

export default function Home() {
  const workouts = [
    {
      id: 0,
      title: "Killer Pull Workout",
      image: "assets/images/placeholder.png",
      description: "Nice Pull Workout",
      time: 60
    },
    {
      id: 1,
      title: "Killer Pull Workout",
      image: "assets/images/placeholder.png",
      description: "Nice Pull Workout",
      time: 60
    },
    {
      id: 2,
      title: "Killer Pull Workout",
      image: "assets/images/placeholder.png",
      description: "Nice Pull Workout",
      time: 60
    },
  ]

  const meals = [
    {
      id: 0,
      title: "Big Gains Pasta",
      image: "assets/images/placeholder.png",
      description: "Lekkere Italiaanse Pasta",
      time: 90
    },
    {
      id: 1,
      title: "Big Gains Pasta",
      image: "assets/images/placeholder.png",
      description: "Lekkere Italiaanse Pasta",
      time: 90
    },
    {
      id: 2,
      title: "Big Gains Pasta",
      image: "assets/images/placeholder.png",
      description: "Lekkere Italiaanse Pasta",
      time: 90
    },
    {
      id: 3,
      title: "Big Gains Pasta",
      image: "assets/images/placeholder.png",
      description: "Lekkere Italiaanse Pasta",
      time: 90
    },
  ]
  return (
    <>
      <CardSlider cardSectionHeading="Featured Workouts" cardSectionLink="/workouts">
        {workouts.map((workout) => {
          return (
            <FitCard
              key={workout.id}
              cardLink={`/workout/${workout.id}`}
              cardName={workout.title}
              cardDescription={workout.description}
              cardImage={workout.image}
              cardTime={workout.time}
            />
          )
        })}
      </CardSlider>
      <CardSlider cardSectionHeading="Featured Meals" cardSectionLink="/meals">
        {meals.map((meal) => {
          return (
            <FitCard
              key={meal.id}
              cardLink={`/meal/${meal.id}`}
              cardName={meal.title}
              cardDescription={meal.description}
              cardImage={meal.image}
              cardTime={meal.time}
            />
          )
        })}
      </CardSlider>
    </>
  );
}
