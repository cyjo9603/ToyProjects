import { Resolver, Query } from '@nestjs/graphql';

import { CoreOutput } from './dto/coreOutput.dto';
import { FeedService } from './feed.service';

@Resolver()
export class FeedResolver {
  constructor(private feedService: FeedService) {}

  @Query(() => CoreOutput)
  hello(): CoreOutput {
    return { result: true };
  }
}
