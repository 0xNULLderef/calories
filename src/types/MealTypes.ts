export interface MealEntry {
  name: string
  calories: number
}

export interface MealSummaryEntry {
  totalCalories: number
  mealsEaten: number
}

export const makeMealSummaryFromMeals = (
  meals: MealEntry[],
): MealSummaryEntry => ({
  totalCalories: meals.reduce(
    (accummulator, meal) => accummulator + meal.calories,
    0,
  ),
  mealsEaten: meals.length,
})
