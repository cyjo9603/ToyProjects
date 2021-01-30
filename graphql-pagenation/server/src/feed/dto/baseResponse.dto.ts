import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class BaseResponse {
  @Field(type => Boolean)
  result!: boolean;

  @Field(type => String, { nullable: true })
  error?: string;
}
