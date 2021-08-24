/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Arg, Query, Resolver } from "type-graphql";

import { PokemonSearch } from "../Interfaces/PokemonSearch";
// import {PokemonPhoto} from "../Interfaces/PokemonPhoto"
// import { PokemonTrainer } from "../Interfaces/PokemonTrainer";
import Pokemon from "../schemas/PokemonSchema";

@Resolver()
export class PokemonFilterResolver {
  @Query(() => [Pokemon])
  async findPokemon(@Arg("filterSearch") filterSearch: PokemonSearch) {
    console.log("galo");
    const pokemonSearch = await Pokemon.find({
      ...filterSearch,
    });
    return pokemonSearch;
  }
  // @Mutation(() => Boolean)
  // async UpdatePokemonPhoto(
  //   @Arg("id") id: string,
  //   @Arg("url_photo") url_photo: string
  // ) {
  //   const pokemonPhoto = await Pokemon.findOneAndUpdate(id, url_photo);
  //   return pokemonPhoto;
  // }
  // @Mutation(() => Pokemon)
  // async CreatePokemonTrainer(
  //   @Arg("pokemonTrainer", () => PokemonTrainer) pokemonTrainer: PokemonTrainer
  // ) {
  //   const pokemonPhoto = await Pokemon.create(pokemonTrainer).save;
  //   return pokemonPhoto;
  // }
}
