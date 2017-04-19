import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

import { colors } from '../variables/index'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const { html, head } = renderPage()
    const styles = flush()
    return { html, head, styles }
  }

  render = () => {
    return (
      <html className="root">
        <Head>
          <title>Goober Schnitzel</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx global>{`
          html {
            margin: 0;
            padding: 0;

            background-color: ${colors.dark};
            color: ${colors.light};
          }
        `}</style>
      </html>
    )
  }
}