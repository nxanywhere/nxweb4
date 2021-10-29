import NextDocument, { Html, Head, Main, NextScript } from 'next/document'


class Document extends NextDocument {
    render() {
        return (
            <Html lang="en" prefix="og: https://ogp.me/ns#">
                <Head />
                <body className="theme-dark">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default Document