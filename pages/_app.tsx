import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Snowfall from 'react-snowfall'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div suppressHydrationWarning={true}>
      {process.browser && <Snowfall style={{ zIndex: 9999 }} />}
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
