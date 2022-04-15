import { NextPage, GetStaticProps } from "next";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { Layout } from "../components/layouts";
import { PokemonListResponse, SmallPokemon } from "../interfaces/pokemon-list";
import pokeApi from "../api/pokeApi";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  console.log(pokemons);
  return (
    <Layout title="Pokemon's List">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map(({ id, name, img }) => (
          <Grid xs={6} sm={3} md={2} xl={1} key={id}>
            <Card hoverable clickable>
              <Card.Body css={{ p: 4 }}>
                <Card.Image src={img} alt={name} width="100%" height="100%" />
                <Card.Footer>
                  <Row justify="space-between">
                    <Text transform="capitalize">{name}</Text>
                    <Text>#{id}</Text>
                  </Row>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
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
