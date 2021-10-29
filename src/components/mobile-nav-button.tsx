import { MobileNavButtonProps } from '../interfaces'
import clsx from 'clsx'
import styles from '../styles/mobile-nav-button.module.scss'
import { useMobileNav } from '../contexts/mobile-nav'
import NavIcon from '../images/list.svg'


const MobileNavButton = ({ className }: MobileNavButtonProps) => {

    const nav = useMobileNav()

    const handleClick = () => {
        nav?.show()
    }

    return (
        <div className={clsx(styles.row, className)}>
            <button 
                className={styles.btn} 
                onClick={handleClick}
                type="button"
            >
                <NavIcon />
            </button>
        </div>
    )
}

export default MobileNavButton