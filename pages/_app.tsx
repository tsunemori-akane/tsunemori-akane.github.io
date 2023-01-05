//import '../styles/globals.css'
import '../styles/tailwind_global.css'
import "#/styles/pretty_code.css"
import type { AppProps } from 'next/app'
import TopLayout from '#/components/topLayout'

export default function App({ Component, pageProps }: AppProps) {
  //const getLayout = Component.PageLayout || ((page) => page)
  return (
    <>
    
      <div className="flex min-h-screen flex-col">
        <TopLayout/>
        <>
          { Component.PageLayout ? (
            <Component.PageLayout>
              <Component {...pageProps} />
            </Component.PageLayout>
          )
            : <Component {...pageProps} />
          }
        </>
      </div>
    
    
    </>
  )
}
