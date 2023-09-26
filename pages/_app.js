import "../styles/globals.css";
import "@fontsource/silkscreen";
import Head from "next/head";

// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>builds.cosparivaar.xyz</title>
        <link
          rel="shortcut icon"
          href="https://pbs.twimg.com/profile_images/1567761345705308161/1je5LwhD_400x400.jpg"
        />
        <meta
          name="description"
          content="a collection of ongoing and shipped projects by @cosparivaar"
          key="desc"
        />
        <meta property="og:title" content="Builds | Cosparivaar" />
        <meta
          property="og:image"
          content="https://pbs.twimg.com/profile_images/1567761345705308161/1je5LwhD_400x400.jpg"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:url"
          content="https://builds.cosparivaar.xyz/"
          key="twt-url"
        />
        <meta
          name="twitter:title"
          content="Builds | Cosparivaar"
          key="twt-title"
        />
        <meta
          name="twitter:description"
          content="a collection of ongoing and shipped projects by @cosparivaar"
          key="twt-desc"
        />
        <meta
          name="twitter:image"
          content="https://pbs.twimg.com/profile_images/1567761345705308161/1je5LwhD_400x400.jpg"
          key="twt-img"
        />
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
