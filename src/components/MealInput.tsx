import { FormEvent } from 'react'
import { MealEntry } from '../types/MealTypes'
import styled from 'styled-components'

interface MealFormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement
  calories: HTMLInputElement
}

interface MealFormElement extends HTMLFormElement {
  readonly elements: MealFormElements
}

const StyledMealForm = styled.form`
  display: flex;
  flex-direction: row;
  gap: 5px;
  padding: 8px;
  width: 100%;

  & .name {
    flex: 6;
  }

  & .calories {
    flex: 3;
  }

  & .add {
    flex: 3;
  }

  @media (max-width: 768px) {
    width: 320px;
    height: 80px;
    flex-direction: column;

    & > * {
      flex: 1;
    }
  }

  @media (max-width: 480px) {
    width: 240px;
    height: 100px;
  }
`

const StyledInput = styled.input`
  box-sizing: border-box;
  height: 48px;
  color: ${props => props.theme.foregroundSecondary};
  background-color: ${props => props.theme.backgroundSecondary};
  border: 1px solid ${props => props.theme.foregroundSecondary};
  outline: none;
  border-radius: 4px;
  padding: 8px;

  &:focus {
    background-color: ${props => props.theme.backgroundAcctentPrimary};
    color: ${props => props.theme.accentPrimary};
    border-color: ${props => props.theme.accentSecondary};
    transition: 0.1s;
  }
`

function MealInput({ added }: { added: (meal: MealEntry) => void }) {
  const submitMeal = (event: FormEvent<MealFormElement>) => {
    event.preventDefault()

    added({
      name: event.currentTarget.elements.name.value.trim(),
      calories: parseFloat(event.currentTarget.elements.calories.value),
    })

    event.currentTarget.reset()
  }

  return (
    <StyledMealForm onSubmit={submitMeal}>
      <StyledInput
        className="name"
        type="text"
        name="name"
        placeholder="Name"
        required
      />
      <StyledInput
        className="calories"
        type="number"
        name="calories"
        placeholder="Calories"
        required
      />
      <StyledInput className="add" type="submit" value="Add" />
    </StyledMealForm>
  )
}

export default MealInput
