import { InputType, Field } from "type-graphql";

@InputType()
export class PokemonPhoto {
  @Field()
  _id: string;

  @Field()
  url_photo: string;
}
