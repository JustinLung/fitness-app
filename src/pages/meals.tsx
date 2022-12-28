import FitCard from "../components/Card"
import FitSection from "../components/FitSection"

export default function Meals() {
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
        <FitSection fitSectionTitle="Delicious Meals">
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
        </FitSection>
    )
}