import { FC } from "react";
import Head from "next/head";

export const Layout: FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Pokemon App</title>
        <meta name="author" content="Iván Urra" />
        <meta name="description" content="Information about pokemon XXX" />
        <meta name="keywords" content="XXX. pokemon, pokedex" />
      </Head>
      {/* NAVBAR */}
      <main>{children}</main>
    </>
  );
};
