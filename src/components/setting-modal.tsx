import styles from '../styles/setting-modal.module.scss'
import { useState, useEffect } from 'react'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import { useLang } from '../contexts/lang'
import { useTheme } from '../contexts/theme'
import { useSettingModal } from '../contexts/setting-modal'
import SettingIcon from '../images/gear.svg'
import CloseIcon from '../images/x-lg.svg'
import MoonIcon from '../images/moon.svg'
import BrightnessIcon from '../images/brightness-high.svg'
import OptionButton from './option-button'



const SettingModal = () => {

    const lang = useLang()
    const theme = useTheme()
    const modal = useSettingModal()
    const { t } = useTranslation()

    const [destroy, setDestroy] = useState(true)

    useEffect(() => {

        if (modal?.state) {
            setDestroy(false)
        }
        else {
            setTimeout(() => {
                setDestroy(true)
            }, 1000)
            // setDestroy(true)
        }

    }, [modal?.state])

    if (destroy) {
        return null
    }

    return (
        <div className={clsx(
            styles.backdrop,
            {
                [styles.in]: modal?.state,
                [styles.out]: !modal?.state,
                [styles.light]: theme?.currentTheme === 'light'
            }
        )}
        >
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <h2><SettingIcon /> {t('setting.header')}</h2>
                    <button
                        className={styles.close}
                        onClick={() => modal?.hide()}
                        type="button"
                    >
                        <CloseIcon />
                    </button>
                </div>
                <div>
                    <div className={styles.group}>
                        <label className={styles.label}>
                            <span>{t('setting.theme.title')}</span>
                            <span>{t('setting.theme.desc')}</span>
                        </label>
                        <OptionButton
                            label={
                                <>
                                    <span>{theme?.currentTheme === 'light' ? t('light') : t('dark')}</span>
                                    {theme?.currentTheme === 'light' ? <BrightnessIcon /> : <MoonIcon />}
                                </>
                            }
                            value={theme?.currentTheme}
                            options={[
                                { title: t('dark'), value: 'dark' },
                                { title: t('light'), value: 'light' },
                            ]}
                            selected={(v) => theme?.changeTheme(v)}
                        />
                    </div>
                    <div className={styles.group}>
                        <label className={styles.label}>
                            <span>{t('setting.language.title')}</span>
                            <span>{t('setting.language.desc')}</span>
                        </label>
                        <OptionButton
                            label={
                                <span>{lang?.currentLang === 'en' ? t('eng') : lang?.currentLang === 'th' ? t('thai') : ''}</span>
                            }
                            value={lang?.currentLang}
                            options={[
                                { title: t('eng'), value: 'en' },
                                { title: t('thai'), value: 'th' },
                            ]}
                            selected={(v) => lang?.changeLang(v)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingModal