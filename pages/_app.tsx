import '../styles/globals.css'
import { useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import type { AppProps } from 'next/app'

const checkClientSide = () => {
  try {
    if (window) {
      return true
    }
    return false
  } catch (error) {
    return false
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const { isReady } = router
  if (checkClientSide()) {
    window.__NEXT_ROUTER__ = router
  }

  useEffect(() => {
    Router.beforePopState(({ url, as, options }) => {
      console.log(`DEBUG : BEFORE POP STATE : ${Router.pathname} => ${url}`)
      return true
    })
  }, [])
  const handleRouteChangeStart = (url: string) => {
    console.log(`DEBUG : handleRouteChangeStart`)
    console.log(`${router.pathname} -> ${url}`);
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
    if (!router.isReady) {
      return;
    }
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
  }, [router.isReady, router.pathname])
  return <Component {...pageProps} />
}

export default MyApp
