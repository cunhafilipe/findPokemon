import { Int, InputType, Field } from "type-graphql";

@InputType()
export class PokemonSearch {
  @Field(() => Int)
  generation: number;

  @Field({ nullable: true })
  is_legendary: boolean;

  @Field({ nullable: true })
  type1: string;

  @Field({ nullable: true })
  type2: string;

  @Field({ nullable: true })
  abilities: string;
}
