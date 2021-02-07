import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class CoreResponse {
  @Field((type) => Boolean)
  result: boolean;
}
