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
      <NextLink href="/" passHref>
        <Link>
          <Image
            src="/Anime-Pokemon-PNG-Image.png"
            alt="Logo"
            width={40}
            height={40}
          />
          <Text color="white" h2 css={{ marginLeft: "20px" }}>
            P
          </Text>
          <Text color="white" h3>
            okémon
          </Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favorites" passHref>
        <Link>
          <Text color="white" h3>
            Favorites
          </Text>
        </Link>
      </NextLink>
    </div>
  );
};
