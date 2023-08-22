import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  )
}
/*
function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}*/

// https://github.com/i18next/next-i18next#unserialisable-configs
export default appWithTranslation(MyApp/*, nextI18NextConfig */)
