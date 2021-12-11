import axios from "axios";

export const getPokemon = async (name: string) => {
  return await axios.get(
    `https://api.covid19api.com/live/country/${name}/status/confirmed`
  );
};
