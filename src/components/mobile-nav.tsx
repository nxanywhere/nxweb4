import styles from '../styles/mobile-nav.module.scss'
import Link from 'next/link'
import clsx from 'clsx'
import { useMobileNav } from '../contexts/mobile-nav'
import MobileNavClose from './mobile-nav-close-button'
import NavItems from './nav-items'
import Social from './social'

const MobileNav = () => {

    const nav = useMobileNav()

    return (
        <nav className={clsx(styles.backdrop, { [styles.show]: nav?.state })}>
            <div className={styles.header}>
                <Link href="/">
                    <a>
                        <img className={styles.logo} src={require('../images/icon.png')} alt="N.E.i.X" />
                    </a>
                </Link>
                <MobileNavClose />
            </div>
            <ul className={styles.menu}>
                <NavItems />
            </ul>
            <div className={styles.social}>
                <Social />
            </div>
        </nav>
    )
}

export default MobileNav