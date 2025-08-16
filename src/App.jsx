import './App.css'
import { ThemeContextProvider } from './Component/themeContextProvider'
import { ToggleMode } from './Component/ToggleMode'

function App() {
  return (
    <>
    <ThemeContextProvider>
      <ToggleMode></ToggleMode>
      </ThemeContextProvider>
    </>
  )
}

export default App
