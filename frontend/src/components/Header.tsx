import { useTheme } from "../context/ThemeProvider"

const Header = () => {
 const {theme, toggleTheme} = useTheme()
  return (
    <div className="bg-background text-main container">
      Header Component
      <h1>Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default Header
