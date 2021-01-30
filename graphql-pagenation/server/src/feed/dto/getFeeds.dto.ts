import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Feed } from '../feed.model';
import { BaseResponse } from './baseResponse.dto';

@ObjectType()
export class GetFeedsOutput extends BaseResponse {
  @Field(type => [Feed], { nullable: true })
  feeds?: Feed[];

  @Field(type => Int, { nullable: true })
  total?: number;
}
