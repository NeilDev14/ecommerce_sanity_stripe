import React from "react";
import { Toaster } from "react-hot-toast";

import { Layout } from "../components";
import { Progress } from "../components";
import "../styles/globals.css";
import { StateContext } from "../context/StateContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      console.log(
        `App is changing to ${url} ${
          shallow ? "with" : "without"
        } shallow routing`
      );
      setLoading(true);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  useEffect(() => {
    const handleRouteComplete = (url, { shallow }) => {
      console.log(
        `App is completed to ${url} ${
          shallow ? "with" : "without"
        } shallow routing`
      );
      setLoading(false);
    };

    router.events.on("routeChangeComplete", handleRouteComplete);
  }, []);
  return (
    <StateContext>
      <Layout>
        <Toaster />
        {loading && <Progress />}
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
