import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';

import { BaseResponse } from './dto/baseResponse.dto';
import { GetFeedsOutput } from './dto/getFeeds.dto';
import { FeedService } from './feed.service';

@Resolver()
export class FeedResolver {
  constructor(private feedService: FeedService) {}

  @Query(() => GetFeedsOutput)
  async getFeeds(
    @Args('page', { type: () => Int, nullable: false }) page: number,
  ): Promise<GetFeedsOutput> {
    const total = await this.feedService.count();
    const { hidePost } = this.feedService.paging(page);
    const feeds = await this.feedService.find(hidePost);
    return { result: true, feeds, total };
  }

  @Mutation(() => BaseResponse)
  async add(@Args('content') content: string): Promise<BaseResponse> {
    await this.feedService.add(content);
    return { result: true };
  }
}
