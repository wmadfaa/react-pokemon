import { httpClient } from "../http-client";
import { BASE_SPRITES_URL, HQ_SPRITES_URL } from "../../constants/globals";
import { PokemonResponse, Sprites } from "../types";

export interface Pokemon extends PokemonResponse {
  sprites: Sprites & { hq_front_default: string; front_default: string };
}

export async function getPokemon(id: string): Promise<Pokemon> {
  const { data } = await httpClient.get<PokemonResponse>(`/pokemon/${id}`);
  const front_default = `${BASE_SPRITES_URL}${id}`;
  const hq_front_default = `${HQ_SPRITES_URL}${id.padStart(3, "0")}`;
  return {
    ...data,
    sprites: { ...data.sprites, front_default, hq_front_default },
  };
}
