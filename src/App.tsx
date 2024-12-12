import { ChangeEvent, useState } from 'react'
import { MealEntry } from './types/MealTypes'
import MealInput from './components/MealInput'
import MealList from './components/MealList'
import styled, { ThemeProvider } from 'styled-components'
import MealSummary from './components/MealSummary'

const LIGHT_THEME = {
  backgroundPrimary: '#fff',
  backgroundSecondary: '#ebebeb',
  backgroundAcctentPrimary: '#dfdeff',
  foregroundPrimary: '#333',
  foregroundSecondary: '#696969',
  accentPrimary: '#2e30aa',
  accentSecondary: '#2307c4',
}

const DARK_THEME = {
  backgroundPrimary: '#141414',
  backgroundSecondary: '#1b1b1b',
  backgroundAcctentPrimary: '#141436',
  foregroundPrimary: '#646464',
  foregroundSecondary: '#3a3a3a',
  accentPrimary: '#8f91db',
  accentSecondary: '#2307c4',
}

const StyledApp = styled.div`
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  background-color: ${props => props.theme.backgroundPrimary};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 32px;
  box-sizing: border-box;
`

const StyledThemeSelector = styled.div`
  position: absolute;
  bottom: 32px;
  right: 32px;
  color: ${props => props.theme.accentPrimary};
  accent-color: ${props => props.theme.accentSecondary};
`

const StyledCheckbox = styled.input``

function App() {
  const [meals, setMeals] = useState<MealEntry[]>([
    { name: 'Ciastko', calories: 420 },
  ])

  const [theme, setTheme] = useState(LIGHT_THEME)

  const addMeal = (meal: MealEntry) => {
    setMeals((oldMeals: MealEntry[]) => [...oldMeals, meal])
  }

  const themeChange = (event: ChangeEvent<HTMLInputElement>) =>
    setTheme(event.currentTarget.checked ? DARK_THEME : LIGHT_THEME)

  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <MealInput added={addMeal} />
        <MealSummary meals={meals} />
        <MealList meals={meals} />
        <StyledThemeSelector>
          <span>Should we do dark mode?</span>
          <StyledCheckbox type="checkbox" onChange={themeChange} />
        </StyledThemeSelector>
      </StyledApp>
    </ThemeProvider>
  )
}

export default App
