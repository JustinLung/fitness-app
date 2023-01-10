export const workoutsQuery = `query Workouts {
      workouts {
        id
        workoutTitle
        workoutTime
        workoutImage {
          url
        }
      workoutDescription
    }}`;

export const mealsQuery = `query Meals {
      meals {
        id
        mealImage {
        url
      }
        mealTitle
        mealDescription
        time
  }}`;

export const workoutIdQuery = `query Workout($id: ID) {
        workout(where: {id: $id}) {
            workoutTitle
    				workoutImage {
              url
            }
    				workoutDescription
  					workoutTime
    				exercises {
              exerciseTitle
              exerciseReps
              exerciseSet
            }
        }
    }`;
