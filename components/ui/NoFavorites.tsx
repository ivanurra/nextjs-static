import { Container, Text, Image } from "@nextui-org/react";

export const NoFavorites = () => {
  return (
    <div>
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
        <Text
          h1
          css={{
            marginTop: "40px",
            marginBottom: "40px",
          }}
        >
          No favorites yet
        </Text>
        <Image
          src="/Anime-Pokemon-PNG-Image.png"
          alt="Logo"
          width={200}
          height={200}
        />
      </Container>
    </div>
  );
};
