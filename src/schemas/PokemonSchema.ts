import {
  Connection,
  Document,
  Model,
  Schema,
  SchemaDefinition,
  SchemaTypes,
} from "mongoose";

export interface PokemonProps extends Document {
  id: string;
  abilities: string;
  against_bug: number;
  against_darkness: number;
  against_dragon: number;
  against_electric: number;
  against_fairy: number;
  against_fight: number;
  against_fire: number;
  against_flying: number;
  against_ghost: number;
  against_grass: number;
  against_ground: number;
  against_ice: number;
  against_normal: number;
  against_poison: number;
  against_psychic: number;
  against_rock: number;
  against_steel: number;
  against_water: number;
  attacks: number;
  base_egg_steps: number;
  base_happiness: number;
  base_total: number;
  capture_rate: number;
  classfication: string;
  defense: number;
  experience_growth: number;
  height_m: number;
  hp: number;
  japanese_name: string;
  name: string;
  percentage_male: number;
  pokedex_number: number;
  sp_attack: number;
  sp_defense: number;
  speed: number;
  type1: string;
  type2: string;
  weight_kg: number;
  generation: number;
  is_legendary: boolean;
  url_photo: string;
}
const pokemonSchema: SchemaDefinition = {
  id: { type: SchemaTypes.String, required: true },
  abilities: { type: SchemaTypes.String },
  against_bug: { type: SchemaTypes.Number },
  against_darkness: { type: SchemaTypes.Number },
  against_dragon: { type: SchemaTypes.Number },
  against_electric: { type: SchemaTypes.Number },
  against_fairy: { type: SchemaTypes.Number },
  against_fight: { type: SchemaTypes.Number },
  against_fire: { type: SchemaTypes.Number },
  against_flying: { type: SchemaTypes.Number },
  against_ghost: { type: SchemaTypes.Number },
  against_grass: { type: SchemaTypes.Number },
  against_ground: { type: SchemaTypes.Number },
  against_ice: { type: SchemaTypes.Number },
  against_normal: { type: SchemaTypes.Number },
  against_poison: { type: SchemaTypes.Number },
  against_psychic: { type: SchemaTypes.Number },
  against_rock: { type: SchemaTypes.Number },
  against_steel: { type: SchemaTypes.Number },
  against_water: { type: SchemaTypes.Number },
  attacks: { type: SchemaTypes.Number },
  base_egg_steps: { type: SchemaTypes.Number },
  base_happiness: { type: SchemaTypes.Number },
  base_total: { type: SchemaTypes.Number },
  capture_rate: { type: SchemaTypes.Number },
  classfication: { type: SchemaTypes.String },
  defense: { type: SchemaTypes.Number },
  experience_growth: { type: SchemaTypes.Number },
  height_m: { type: SchemaTypes.Number },
  hp: { type: SchemaTypes.Number },
  japanese_name: { type: SchemaTypes.String },
  name: { type: SchemaTypes.String },
  percentage_male: { type: SchemaTypes.Number },
  pokedex_number: { type: SchemaTypes.Number },
  sp_attack: { type: SchemaTypes.Number },
  sp_defense: { type: SchemaTypes.Number },
  speed: { type: SchemaTypes.Number },
  type1: { type: SchemaTypes.String },
  type2: { type: SchemaTypes.String },
  weight_kg: { type: SchemaTypes.Number },
  generation: { type: SchemaTypes.Number },
  is_legendary: { type: SchemaTypes.Boolean },
  url_photo: { type: SchemaTypes.String },
};

const collectionName = "pokemons";
const noteSchema: Schema = new Schema(pokemonSchema);
const Pokemon = (conn: Connection): Model<any> =>
  conn.model(collectionName, noteSchema);

// const Pokemon = mongoose.model<PokemonProps>("pokemons", PokemonSchema);

export default Pokemon;
