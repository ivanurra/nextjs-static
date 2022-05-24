import { Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";
import { Link } from "@nextui-org/react";

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
        src="/Anime-Pokemon-PNG-Image.png"
        alt="Logo"
        width={40}
        height={40}
      />
      <NextLink href="/" passHref>
        <Link>
          <Text color="white" h2 css={{ marginLeft: "15px" }}>
            P
          </Text>
          <Text color="white" h3>
            okémon
          </Text>
          <Text color="white" h2 css={{ marginLeft: "10px" }}>
            151
          </Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favorites" passHref>
        <Link>
          <Text color="white" h3 css={{ marginRight: "15px" }}>
            Favorites
          </Text>
        </Link>
      </NextLink>
    </div>
  );
};
