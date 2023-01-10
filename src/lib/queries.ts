export const workoutsQuery = `query Assets {
      workouts {
        id
        workoutTitle
        workoutTime
        workoutImage {
          url
        }
      workoutDescription
    }}`;

export const mealsQuery = `query Assets {
      meals {
        id
        mealImage {
        url
      }
        mealTitle
        mealDescription
        time
  }}`;
