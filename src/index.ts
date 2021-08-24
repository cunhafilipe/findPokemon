import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import { buildSchema } from "type-graphql";

import { PokemonFilterResolver } from "./resolvers/PokemonFilterResolver";

(async () => {
  const app = express();

  mongoose.connect("mongodb://localhost/pokemonCode", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PokemonFilterResolver],
      validate: true,
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  apolloServer.applyMiddleware({ app, cors: false });
  app.listen(4000, () => {
    console.log("Running EDUQ");
  });
})();
