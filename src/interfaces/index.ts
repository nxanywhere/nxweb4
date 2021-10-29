import type { ReactNode } from "react";

export interface NavItemProps {
    title: string,
    desc: string,
    href: string
}

export interface MobileNavActions {
    show: () => void,
    hide: () => void
}

export interface MobileNavContext extends MobileNavActions {
    state: boolean
}

export interface MobileNavButtonProps {
    className?: string
}

export interface OptionValue {
    title: string,
    value: any
}

export interface OptionButtonProps {
    label: ReactNode,
    options: OptionValue[],
    value: any,
    selected?: (value: any) => void
}

export interface LangActions {
    changeLang: (lang: string) => void
}

export interface LangContext extends LangActions {
    currentLang: string
}

export interface LangProviderProps {
    lang: string
}

export interface ThemeActions {
    changeTheme: (theme: string) => void
}

export interface ThemeContext extends ThemeActions {
    currentTheme: string
}

export interface ThemeProviderProps {
    theme: string
}

export interface SettingModalActions {
    show: () => void,
    hide: () => void
}

export interface SettingModalContext extends SettingModalActions {
    state: boolean
}