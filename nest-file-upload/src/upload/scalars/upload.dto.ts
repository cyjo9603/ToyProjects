import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class UploadResponse {
  @Field((type) => String)
  path: string;
}
