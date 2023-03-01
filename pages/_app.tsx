import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Montserrat } from "next/font/google"
const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  subsets: ["latin"]
})
function MyApp({ Component, pageProps }: AppProps) {
  return <main className={`${montserrat.variable} font-montserrat`}>
    <Component {...pageProps} />
  </main>
}

export default MyApp
