import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { FeedModule } from './feed/feed.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      autoSchemaFile: true,
    }),
    FeedModule,
  ],
})
export class AppModule {}
