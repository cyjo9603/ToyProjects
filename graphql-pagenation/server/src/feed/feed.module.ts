import { Module } from '@nestjs/common';
import { FeedResolver } from './feed.resolver';

@Module({
  providers: [FeedResolver]
})
export class FeedModule {}
