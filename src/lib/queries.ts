export const workoutsQuery = `query Workouts {
      workouts(first: 3) {
        id
        workoutTitle
        workoutTime
        workoutImage {
          url
        }
      workoutDescription
    }}`;

export const mealsQuery = `query Meals {
      meals(first: 3) {
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
              id
              exerciseTitle
              exerciseReps
              exerciseSet
            }
        }
    }`;

export const mealIdQuery = `query Meal($id: ID) {
        meal(where: {id: $id}) {
            mealTitle
    				mealImage {
              url
            }
    				mealDescription
  					time
            preperationTime
    				macros {
              calories
              proteine
              carbs
              fat
            }
            ingredient {
              id
              ingredient
            }
            methodOfPreperations {
              id
              method
            }
        }
    }`;
