import styled from 'styled-components'
import { makeMealSummaryFromMeals, MealEntry } from '../types/MealTypes'

const StyledMealSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 8px;
  margin: 8px 8px 24px;
  width: 100%;
  box-sizing: border-box;

  color: ${props => props.theme.foregroundPrimary};
  background-color: ${props => props.theme.backgroundSecondary};
  border: 1px solid ${props => props.theme.foregroundSecondary};
  border-radius: 4px;

  &:hover {
    background-color: ${props => props.theme.backgroundAcctentPrimary};
    color: ${props => props.theme.accentPrimary};
    border-color: ${props => props.theme.accentSecondary};
    transition: 0.1s;
  }

  @media (max-width: 768px) {
    width: 320px;
    height: 80px;
    margin-top: 48px;
  }

  @media (max-width: 480px) {
    margin-top: 32px;
    width: 240px;
    height: 100px;
  }
`

function MealSummary({ meals }: { meals: MealEntry[] }) {
  const summary = makeMealSummaryFromMeals(meals)

  const mealCaloryResponses = {
    0: "damn you're fucking starving",
    100: 'you doin fine?? maybe eat a bit more...',
    2000: 'a fine boi',
    3000: 'stress eating?',
    4000: 'OH LAWD HE COMIN',
    9001: 'ITS OVER 9000 !!!!!!!!!!!!',
  }

  // oh *WHY* do they have to be strings...
  const mealCalorySteps = Object.keys(mealCaloryResponses).map(key =>
    parseFloat(key),
  )

  const chosenStep = Math.max(
    ...mealCalorySteps.filter(step => summary.totalCalories > step),
  )
  const chosenMessage =
    mealCaloryResponses[chosenStep as keyof typeof mealCaloryResponses]

  return (
    <StyledMealSummary>
      <span>
        You fucked up a total of <strong>{summary.totalCalories}kcal</strong> in{' '}
        <strong>{summary.mealsEaten}</strong> {summary.mealsEaten == 1 ? 'meal' : 'meals'}... {chosenMessage}
      </span>
    </StyledMealSummary>
  )
}

export default MealSummary
