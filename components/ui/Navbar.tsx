import { Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";

export const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px",
        backgroundColor: theme?.colors.gray800.value,
      }}
    >
      <Image
        src="../../public/Anime-Pokemon-PNG-Image.png"
        alt="Logo Pokemon"
        width={70}
        height={70}
      />
      <Text color="white" h2>
        P
      </Text>
      <Text color="white" h3>
        okémon
      </Text>
      <Spacer css={{ flex: 1 }} />
      <Text color="white" h3>
        Favorites
      </Text>
    </div>
  );
};
