import type { NextPage } from 'next'
import styles from '../styles/home.module.scss'
import { useTranslation } from 'react-i18next'
import MobileNavButton from '../components/mobile-nav-button'
import SettingButton from '../components/setting-button'
import Social from '../components/social'
import NavItems from '../components/nav-items'


const Home: NextPage<{}> = () => {

    const { t } = useTranslation()

    return (
        <>
            <MobileNavButton className={styles.mobile_nav} />
            <div className={styles.container}>
                <aside className={styles.aside}>
                    <h2>{t('navigation')}</h2>
                    <nav>
                        <ul className={styles.menu}>
                            <NavItems />
                        </ul>
                    </nav>
                </aside>
                <main className={styles.main}>
                    <h1 className={styles.h1}>
                        <span>THIS NAME CALL A SPELLING IS</span>
                        <span>N-E-I-X</span>
                        <span>NOT WORD READING!</span>
                    </h1>
                    <div className={styles.mb2}>
                        <SettingButton />
                    </div>
                    <div>
                        <p className={styles.social_title}>Follow me on Social Media</p>
                        <div className={styles.social_list}>
                            <Social />
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Home