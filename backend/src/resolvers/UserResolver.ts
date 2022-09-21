import crypto from "crypto";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../models/User";


// query => Buscar dados
// Mutation => Criar, alterar ou deletar

@Resolver()
export class UserResolver {
  private data: User[] = [];

  @Query(() => [User])
  async users() {
    return this.data
  }
  
  @Mutation(() => User)
  async createUser(
    @Arg('name') name: string,
  ) {
    const user = { id: crypto.randomUUID(), name}

    this.data.push(user)
    return user
  }

}