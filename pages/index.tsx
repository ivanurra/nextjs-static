import { NextPage, GetStaticProps } from "next";
import { Layout } from "../components/layouts";
import pokeApi from "../api/pokeApi";
import { PokemonListResponse, SmallPokemon } from "../interfaces/pokemon-list";
import Image from "next/image";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  console.log(pokemons);
  return (
    <Layout title="Pokemon's List">
      <ul>
        {pokemons.map(({ id, name, img }) => (
          <li key={id}>
            #{id} - {name}
            {/* <Image src={img} alt={name} width="200px" height="200px"  /> */}
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  console.log(data);
  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  return {
    props: { pokemons },
  };
};

export default HomePage;
