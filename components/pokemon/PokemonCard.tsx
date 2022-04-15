import { FC } from "react";
import { SmallPokemon } from "../../interfaces";
import { Card, Grid, Row, Text } from "@nextui-org/react";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
      <Card hoverable clickable>
        <Card.Body css={{ p: 4 }}>
          <Card.Image src={pokemon.img} alt={pokemon.name} width="100%" height="100%" />
          <Card.Footer>
            <Row justify="space-between">
              <Text transform="capitalize">{pokemon.name}</Text>
              <Text>#{pokemon.id}</Text>
            </Row>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Grid>
  );
};
