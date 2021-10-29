import styles from '../styles/setting-button.module.scss'
import { useTranslation } from 'react-i18next'
import SettingIcon from '../images/gear.svg'
import { useSettingModal } from '../contexts/setting-modal'

const SettingButton = () => {

    const modal = useSettingModal()
    const { t } = useTranslation()

    return (
        <button
            className={styles.btn}
            onClick={() => modal?.show()}
            type="button"
        >
            <SettingIcon /> {t('setting.header')}
        </button>
    )
}

export default SettingButton