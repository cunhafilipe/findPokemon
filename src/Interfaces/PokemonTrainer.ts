import { InputType, Field } from "type-graphql";
import { ObjectID } from "typeorm";

@InputType()
export class PokemonTrainer {
  @Field()
  id: ObjectID;

  @Field()
  name: string;

  @Field()
  pokemon1: string;

  @Field()
  pokemon2: string;

  @Field()
  pokemon3: string;

  @Field()
  pokemon4: string;

  @Field()
  pokemon5: string;

  @Field()
  pokemon6: string;

  @Field()
  pokemon7: string;
}
