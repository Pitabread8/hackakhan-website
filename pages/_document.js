import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" style={{scrollBehavior:'smooth', overflow: 'visible'}}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
