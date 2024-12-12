import styled from 'styled-components'
import { MealEntry } from '../types/MealTypes'

const StyledMeal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 8px 24px;
  margin: 8px 0;

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

  .MealName {
    font-size: 14pt;
  }
`

function Meal({ meal }: { meal: MealEntry }) {
  return (
    <StyledMeal>
      <span className="MealName">{meal.name}</span>
      <small className="MealCalories">{meal.calories}kcal</small>
    </StyledMeal>
  )
}

export default Meal
