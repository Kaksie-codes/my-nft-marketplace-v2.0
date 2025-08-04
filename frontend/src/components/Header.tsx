import { useTheme } from "../context/ThemeProvider"

const Header = () => {
 const {theme, toggleTheme} = useTheme()
  return (
    <div className="bg-white md:bg-slate-500 lg:bg-yellow-400 text-main container">
      Header Component
      <h1>Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default Header
