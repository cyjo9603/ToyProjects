import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Feed } from '../feed.model';
import { CoreOutput } from './coreOutput.dto';

@ObjectType()
export class GetFeedsOutput extends CoreOutput {
  @Field(type => [Feed], { nullable: true })
  feeds?: Feed[];

  @Field(type => Int, { nullable: true })
  startPage?: number;

  @Field(type => Int, { nullable: true })
  endPage?: number;
}
