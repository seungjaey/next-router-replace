import '../styles/globals.css'
import { useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const { isReady } = router
  useEffect(() => {
    if (!isReady) {
      return;
    }
    Router.beforePopState(({ url, as, options }) => {
      console.log(`DEBUG : BEFORE POP STATE`)
      console.log(`${url} : ${as}`)
      return true
    })
  }, [isReady])
  const handleRouteChangeStart = () => {
    console.log(`DEBUG : handleRouteChangeStart`)
  }
  const handleChangeComplete = () => {
    console.log(`DEBUG : handleChangeComplete`)
  }
  const handleChangeError = () => {
    console.log(`DEBUG : handleChangeError`)
  }
  const handleHistoryChange = () => {
    console.log(`DEBUG : handleHistoryChange`)
  }
  const handleChangeStart = () => {
    console.log(`DEBUG : handleChangeStart`)
  }
  const handleHashChangeComplete = () => {
    console.log(`DEBUG : handleHashChangeComplete`)
  }

  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleChangeComplete);
    router.events.on('routeChangeError', handleChangeError);
    router.events.on('beforeHistoryChange', handleHistoryChange);
    router.events.on('hashChangeStart', handleChangeStart);
    router.events.on('hashChangeComplete', handleHashChangeComplete);
    return function cleanUp() {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleChangeComplete);
      router.events.off('routeChangeError', handleChangeError);
      router.events.off('beforeHistoryChange', handleHistoryChange);
      router.events.off('hashChangeStart', handleChangeStart);
      router.events.off('hashChangeComplete', handleHashChangeComplete);
    };
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
