import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { CoreOutput } from './dto/coreOutput.dto';
import { FeedService } from './feed.service';

@Resolver()
export class FeedResolver {
  constructor(private feedService: FeedService) {}

  @Query(() => CoreOutput)
  hello(): CoreOutput {
    return { result: true };
  }

  @Mutation(() => CoreOutput)
  async add(@Args('content') content: string): Promise<CoreOutput> {
    await this.feedService.add(content);
    return { result: true };
  }
}
