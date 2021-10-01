/* eslint-disable prettier/prettier */
import React from "react";
import { AppProps } from "next/app";
import "@styles/app.scss";
import "@styles/global.scss";
import { Provider } from "react-redux";
import store from "@redux/store";
import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <Provider store={store}>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
