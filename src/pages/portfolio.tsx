import styles from '../styles/portfolio.module.scss'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import clsx from 'clsx'
import MobileNavButton from '../components/mobile-nav-button'
import Social from '../components/social'

const Portfolio: NextPage<{}> = () => {
    return (
        <>
            <NextSeo
                title="Portfolio"
            />
            <MobileNavButton />
            <main className={styles.container}>
                <div className={styles.profile_row}>
                    <section className={styles.profile_section}>
                        <div className={styles.profile_wrap}>
                            <img src={require('../images/profile.jpg')} title="N.E.i.X" loading="lazy" />
                        </div>
                        <div className={styles.profile_desc}>
                            <h1>NEiX</h1>
                            <h2>Nawapon Boonjua</h2>
                            <p>Producer / Arranger / Mixing Engineer</p>
                            <p><b>Age:</b> 19-20 (2001)</p>
                        </div>
                    </section>
                    <section className={clsx(styles.card, styles.contact_card)}>
                        <header>
                            <h2>Contact</h2>
                        </header>
                        <div className={styles.social}>
                            <Social />
                        </div>
                    </section>
                </div>
                <div className={styles.row}>
                    <section className={styles.card}>
                        <header>
                            <h2>Arrangement / Produce</h2>
                        </header>
                        <div className={styles.iframe_container}>
                            <iframe
                                className={styles.iframe_responsive}
                                src="https://www.youtube.com/embed/videoseries?list=PLlIj_lDiQBoA-fTFdnMQmkgtttHFnW99v"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                        </div>
                    </section>
                    <section className={styles.card}>
                        <header>
                            <h2>Single Original</h2>
                        </header>
                        <iframe
                            src="https://open.spotify.com/embed/artist/0JgoMllaC0zxZwNeLl8wk8?utm_source=generator"
                            width="100%" height="380"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                    </section>
                </div>
            </main>
        </>
    )
}

export default Portfolio