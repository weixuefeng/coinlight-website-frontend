import 'styles/style.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import 'i18n'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <img
        className="coinlight-logo"
        src="https://ipfs.wavemall.io/ipfs/QmRwwGq91m3Q4euzLshLrra4m1p1QTUwmNS8h6epqiEZTL"
        alt="logo"
      />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default MyApp
