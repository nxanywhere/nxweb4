import type { ThemeActions, ThemeContext, ThemeProviderProps } from '../interfaces'
import { FC, createContext, useContext, useState, useMemo, useEffect } from 'react'
import { useCookies } from 'react-cookie'

const Context = createContext<ThemeContext | null>(null)

export const ThemeProvider: FC<ThemeProviderProps> = ({ theme, children }) => {

    const [currentTheme, setCurrentTheme] = useState<string>(theme)
    const [cookie, setCookie] = useCookies(['NEIX_THEME'])

    const actions = useMemo<ThemeActions>(() => ({
        changeTheme(t) {
            setCurrentTheme(t)
            setCookie('NEIX_THEME', t, {
                path: '/',
                maxAge: 17280,
                sameSite: true
            })
        }
    }), [])

    useEffect(() => {

        if (cookie.NEIX_THEME && cookie.NEIX_THEME === 'dark' || cookie.NEIX_THEME === 'light') {
            actions.changeTheme(cookie.NEIX_THEME)
        }
        else {
            actions.changeTheme(theme)
        }

    }, [])

    useEffect(() => {
        if(currentTheme === 'light') {
            document.body.classList.remove('theme-dark')
            document.body.classList.add('theme-light')
        }
        else {
            document.body.classList.remove('theme-light')
            document.body.classList.add('theme-dark')
        }
    }, [currentTheme])

    return (
        <Context.Provider value={{ currentTheme, ...actions }}>
            {children}
        </Context.Provider>
    )
}

export const useTheme = () => {
    return useContext(Context)
}