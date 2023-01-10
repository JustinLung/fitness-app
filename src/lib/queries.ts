export const workoutsQuery = `query Assets {
      workouts {
        workoutTitle
        workoutTime
        workoutImage {
          url
        }
      workoutDescription
    }}`;

export const mealsQuery = `query Assets {
      meals {
    mealImage {
      url
    }
    mealTitle
    mealDescription
    time
  }}`;
