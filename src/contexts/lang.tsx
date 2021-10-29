import type { LangActions, LangContext, LangProviderProps } from '../interfaces'
import { FC, createContext, useContext, useState, useMemo, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useTranslation } from 'react-i18next'


const Context = createContext<LangContext | null>(null)


export const LangProvider: FC<LangProviderProps> = ({ lang, children }) => {

    const [currentLang, setCurrentLang] = useState<string>(lang)
    const [cookie, setCookie] = useCookies(['NEXT_LOCALE'])
    const { i18n } = useTranslation()

    const actions = useMemo<LangActions>(() => ({
        changeLang(l) {
            setCurrentLang(l)
            setCookie('NEXT_LOCALE', l, {
                path: '/',
                maxAge: 17280,
                sameSite: true
            })
        }
    }), [])

    useEffect(() => {
        if (cookie.NEXT_LOCALE && cookie.NEXT_LOCALE === 'th' || cookie.NEXT_LOCALE === 'en') {
            actions.changeLang(cookie.NEXT_LOCALE) 
        }
        else {
            actions.changeLang(lang)
        }
    }, [])

    useEffect(() => {
        i18n.changeLanguage(currentLang)
        document.documentElement.setAttribute('lang', currentLang)
    }, [currentLang])

    return (
        <Context.Provider value={{ currentLang, ...actions }}>
            {children}
        </Context.Provider>
    )
}

export const useLang = () => {
    return useContext(Context)
}