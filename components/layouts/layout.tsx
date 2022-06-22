import { FC } from "react";
import Head from "next/head";
import { Navbar } from "../ui/Navbar";

interface Props {
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Iván Urra" />
        <meta name="description" content={`Info about pokemon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex `} />
        <meta property="og:title" content={`Information about ${title} `} />
        <meta property="og:description" content={`Page about ${title} `} />
        <meta property="og:image" content="http://localhost:3000/banner.png" />
      </Head>
      <Navbar />
      <main style={{ padding: "0px 20px" }}>{children}</main>
    </>
  );
};
