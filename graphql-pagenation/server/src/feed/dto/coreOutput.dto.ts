import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class CoreOutput {
  @Field(type => Boolean)
  result!: boolean;

  @Field(type => String)
  error?: string;
}
