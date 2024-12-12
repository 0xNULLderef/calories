import { MealEntry } from '../types/MealTypes'
import styled from 'styled-components'
import Meal from './Meal'

const StyledMealList = styled.ul`
  list-style-type: none;
  margin: 8px;
  padding: 0;
  width: 100%;

  @media (max-width: 768px) {
    width: 320px;
    height: 80px;
  }

  @media (max-width: 480px) {
    width: 240px;
    height: 100px;
  }
`

function MealList({ meals }: { meals: MealEntry[] }) {
  return (
    <>
      {meals.length > 0 ? (
        <StyledMealList>
          {meals.map((meal, index) => (
            <li key={index}>
              <Meal meal={meal} />
            </li>
          ))}
        </StyledMealList>
      ) : (
        <span>You don't eat?</span>
      )}
    </>
  )
}

export default MealList
