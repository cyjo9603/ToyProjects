import { Resolver, Query } from '@nestjs/graphql';
import { CoreOutput } from './dto/coreOutput.dto';

@Resolver()
export class FeedResolver {
  @Query(() => CoreOutput)
  hello(): CoreOutput {
    return { result: true };
  }
}
