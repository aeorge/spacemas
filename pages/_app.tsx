import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Snowfall from 'react-snowfall'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Snowfall style={{ zIndex: 9999 }} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
