import mongoose, { Document, Schema } from "mongoose";

type PokemonTrainer = Document & {
  id: string;
  name: string;
  pokemon1: string;
  pokemon2: string;
  pokemon3: string;
  pokemon4: string;
  pokemon5: string;
  pokemon6: string;
  pokemon7: string;
};
const PokemonTrainerSchema = new Schema({
  id: String,
  name: String,
  pokemon1: String,
  pokemon2: String,
  pokemon3: String,
  pokemon4: String,
  pokemon5: String,
  pokemon6: String,
  pokemon7: String,
});

const PokemonTrainer = mongoose.model<PokemonTrainer>(
  "pokemonTrainer",
  PokemonTrainerSchema
);

export { PokemonTrainer };
