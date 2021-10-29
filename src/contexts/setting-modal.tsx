import type { SettingModalActions, SettingModalContext } from '../interfaces'
import { FC, createContext, useContext, useState, useMemo } from 'react'


const Context = createContext<SettingModalContext | null>(null)


export const SettingModalProvider: FC<{}> = ({ children }) => {

    const [state, setState] = useState<boolean>(false)

    const actions = useMemo<SettingModalActions>(() => ({
        show() {
            setState(true)
        },
        hide() {
            setState(false)
        }
    }), [])

    return (
        <Context.Provider value={{ state, ...actions }}>
            {children}
        </Context.Provider>
    )
}

export const useSettingModal = () => {
    return useContext(Context)
}