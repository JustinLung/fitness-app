import FitCard from "../components/Card"
import FitSection from "../components/FitSection"

export default function Workouts() {
    const workouts = [
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
        <FitSection fitSectionTitle="Get Your Pump In">
            {workouts.map((workout) => {
                return (
                    <FitCard
                        key={workout.id}
                        cardLink="/"
                        cardName={workout.title}
                        cardDescription={workout.description}
                        cardImage={workout.image}
                        cardTime={workout.time}
                    />
                )
            })}
        </FitSection>
    )
}