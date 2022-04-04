import { FC } from "react";
import Head from "next/head";

interface Props {
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Iván Urra" />
        <meta
          name="description"
          content={`Information about pokemon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex `} />
      </Head>
      {/* NAVBAR */}
      <main>{children}</main>
    </>
  );
};
