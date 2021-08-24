import { Document } from "mongoose";
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class Pokemon extends Document {
  id: string;

  @Field(() => Int)
  abilities: string;

  @Field(() => Int)
  against_bug: number;

  @Field(() => Int)
  against_darkness: number;

  @Field(() => Int)
  against_dragon: number;

  @Field(() => Int)
  against_electric: number;

  @Field(() => Int)
  against_fairy: number;

  @Field(() => Int)
  against_fight: number;

  @Field(() => Int)
  against_fire: number;

  @Field(() => Int)
  against_flying: number;

  @Field(() => Int)
  against_ghost: number;

  @Field(() => Int)
  against_grass: number;

  @Field(() => Int)
  against_ground: number;

  @Field(() => Int)
  against_ice: number;

  @Field(() => Int)
  against_normal: number;

  @Field(() => Int)
  against_poison: number;

  @Field(() => Int)
  against_psychic: number;

  @Field(() => Int)
  against_rock: number;

  @Field(() => Int)
  against_steel: number;

  @Field(() => Int)
  against_water: number;

  @Field(() => Int)
  attacks: number;

  @Field(() => Int)
  base_egg_steps: number;

  @Field(() => Int)
  base_happiness: number;

  @Field(() => Int)
  base_total: number;

  @Field(() => Int)
  capture_rate: number;

  classfication: string;

  @Field(() => Int)
  defense: number;

  @Field(() => Int)
  experience_growth: number;

  @Field(() => Int)
  height_m: number;

  @Field(() => Int)
  hp: number;

  japanese_name: string;

  name: string;

  @Field(() => Int)
  percentage_male: number;

  @Field(() => Int)
  pokedex_number: number;

  @Field(() => Int)
  sp_attack: number;

  @Field(() => Int)
  sp_defense: number;

  @Field(() => Int)
  speed: number;

  type1: string;

  type2: string;

  @Field(() => Int)
  weight_kg: number;

  @Field(() => Int)
  generation: number;

  is_legendary: boolean;

  url_photo: string;
}
