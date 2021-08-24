import { BaseEntity, Column, Entity, ObjectID, ObjectIdColumn} from "typeorm";

@Entity()
export class PokemonTrainer extends BaseEntity{
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  pokemon1: string;

  @Column({nullable: true})
  pokemon2: string;

  @Column({nullable: true})
  pokemon3: string;

  @Column({nullable: true})
  pokemon4: string;

  @Column({nullable: true})
  pokemon5: string;

  @Column({nullable: true})
  pokemon6: string;

  @Column({nullable: true})
  pokemon7: string;
  


}