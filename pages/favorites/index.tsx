import { Container, Text, Image } from "@nextui-org/react";
import { Layout } from "../../components/layouts/layout";

const FavoritesPage = () => {
  return (
    <Layout title="Pokémons - Favorites">
      <Container
        css={{
          display: "flex",
          flexDirection: "column",
          height: "calc(100vh-100px)",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <Text>No favorites yet</Text>
        <Image
          src="/Anime-Pokemon-PNG-Image.png"
          alt="Logo"
          width={200}
          height={200}
        />
      </Container>
    </Layout>
  );
};

export default FavoritesPage;
