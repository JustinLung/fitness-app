export const workoutsLatestQuery = `query Workouts {
      workouts(last: 3) {
        id
        workoutTitle
        workoutTime
        difficulty
        workoutImage {
          url
        }
      workoutDescription
      workoutCategory
    }}`;

export const workoutsQuery = `query Workouts {
      workouts() {
        id
        workoutTitle
        workoutTime
        difficulty
        workoutImage {
          url
        }
      workoutDescription
      workoutCategory
    }}`;

export const mealsLatestQuery = `query Meals {
      meals(last: 3) {
        id
        mealImage {
        url
      }
        difficulty
        mealTitle
        mealDescription
        time
        mealCategory
  }}`;

export const mealsQuery = `query Meals {
    meals(last: 3) {
      id
      mealImage {
      url
    }
      difficulty
      mealTitle
      mealDescription
      time
      mealCategory
}}`;

export const workoutIdQuery = `query Workout($id: ID) {
        workout(where: {id: $id}) {
            id
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
            workoutCategory
        }
    }`;

export const mealIdQuery = `query Meal($id: ID) {
        meal(where: {id: $id}) {
            id
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
            mealCategory
        }
    }`;
