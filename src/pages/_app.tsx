import '../styles/app.scss'
import type { AppProps } from 'next/app'
import { CookiesProvider } from 'react-cookie'
import { I18nextProvider } from 'react-i18next'
import { useEffect } from 'react'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import NextNprogress from 'nextjs-progressbar'
import i18n from '../i18n'
import { MobileNavProvider } from '../contexts/mobile-nav'
import MobileNav from '../components/mobile-nav'
import SettingModal from '../components/setting-modal'
import { LangProvider } from '../contexts/lang'
import { ThemeProvider } from '../contexts/theme'
import { SettingModalProvider } from '../contexts/setting-modal'


const App = ({ Component, pageProps }: AppProps) => {

    useEffect(() => {
        document.addEventListener('contextmenu', e => e.preventDefault())
        return () => {
            document.removeEventListener('contextmenu', e => e.preventDefault())
        }
    }, [])

    return (
        <CookiesProvider>
            <I18nextProvider i18n={i18n}>
                <LangProvider lang="th">
                    <ThemeProvider theme="dark">
                        <SettingModalProvider>
                            <MobileNavProvider>
                                <Head>
                                    <meta charSet="utf-8" />
                                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                                    <link rel="icon" href="/favicon.png" />
                                </Head>
                                <DefaultSeo
                                    defaultTitle="N.E.i.X"
                                    titleTemplate="%s | N.E.i.X"
                                />
                                <NextNprogress
                                    color="#b700ff"
                                    height={3}
                                    showOnShallow={true}
                                />
                                <div className="app-root">
                                    <Component {...pageProps} />
                                    <div id="power-by">
                                        <p>Web Design : <a href="https://www.facebook.com/officialneix/" target="_blank">Nawapon Boonjua (NEiX)</a></p>
                                        <p>Web Developer : <a href="https://khunkhao.dev/" target="_blank">khunkhao.dev</a></p>
                                    </div>
                                </div>
                                <MobileNav />
                                <SettingModal />
                            </MobileNavProvider>
                        </SettingModalProvider>
                    </ThemeProvider>
                </LangProvider>
            </I18nextProvider>
        </CookiesProvider>
    )
}

export default App