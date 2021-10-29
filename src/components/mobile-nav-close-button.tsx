import styles from '../styles/mobile-nav-button.module.scss'
import clsx from 'clsx'
import { useMobileNav } from '../contexts/mobile-nav'
import CloseIcon from '../images/x-lg.svg'

const MobileNavClose  = () => {

    const nav = useMobileNav()

    const handleClick = () => {
        nav?.hide()
    }

    return (
        <button 
            className={clsx(styles.btn, styles.close)} 
            onClick={handleClick}
            type="button"
        >
            <CloseIcon />
        </button>
    )
}

export default MobileNavClose