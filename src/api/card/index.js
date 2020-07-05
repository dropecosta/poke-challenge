import config from "../config";
import { HttpClient } from "../httpClient";

export const Pokemon = async ({ url }) => {
  try {
    const response = await HttpClient({ url });
    return await response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const Pokemons = async ({ url }) => {
    try {
      if (!url) {
        url = `${config.baseUrl}pokemon?offset=${config.pokemon.offset}&limit=${config.pokemon.limit}`;
      }
      const response = await HttpClient({ url });
      return await response;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  