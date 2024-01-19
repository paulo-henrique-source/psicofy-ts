import { HeadComponent } from "../components/Head";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <HeadComponent />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
