import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {GoogleSheetProvider} from "../providers/GoogleSheetProvider";
import {TranslationsProvider} from "../providers/TranslationsProvider";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <GoogleSheetProvider live>
            <TranslationsProvider locale="en">
                <Component {...pageProps} />
            </TranslationsProvider>
        </GoogleSheetProvider>
    )
}

export default MyApp
