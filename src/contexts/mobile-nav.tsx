import type { MobileNavActions, MobileNavContext } from '../interfaces'
import { FC, createContext, useContext, useState, useMemo, useEffect } from 'react'
import { useRouter } from 'next/router'


const Context = createContext<MobileNavContext | null>(null)


export const MobileNavProvider: FC<{}> = ({ children }) => {

    const [state, setState] = useState<boolean>(false)

    const router = useRouter()

    const actions = useMemo<MobileNavActions>(() => ({
        show() {
            setState(true)
        },
        hide() {
            setState(false)
        }
    }), [])

    useEffect(() => {

        router.events.on('routeChangeStart', () => setState(false));

        return () => {
            router.events.on('routeChangeStart', () => setState(false));
        }

    }, [router])

    return (
        <Context.Provider value={{ state, ...actions }}>
            {children}
        </Context.Provider>
    )
}

export const useMobileNav = () => {
    return useContext(Context)
}