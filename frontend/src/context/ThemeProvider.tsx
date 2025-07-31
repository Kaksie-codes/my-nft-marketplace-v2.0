import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

type Theme = 'light' | 'dark';

interface ThemeContextType  {
    theme:Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({children} : {children: ReactNode}) => {
    const [theme, setTheme] = useState<Theme>('dark');

    const toggleTheme = () => {
        if(theme === 'dark'){
            setTheme('light')
        }else{
            setTheme('dark')
        }
    }

    useEffect(() => {
        const body = document.body;
        body.classList.remove('light', 'dark');
        body.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const initialValue = {
        theme,
        toggleTheme
    }
  return (
    <ThemeContext.Provider value={initialValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider


export const useTheme = () => {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return themeContext;
}
