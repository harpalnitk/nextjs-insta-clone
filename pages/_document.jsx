import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* for modal  not needed here as react-modal package automatically
        creates portal */}
      <div id='overlays'></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
