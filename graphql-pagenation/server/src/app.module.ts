import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { FeedModule } from './feed/feed.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.DB_CONFIG, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    }),
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      autoSchemaFile: true,
    }),
    FeedModule,
  ],
})
export class AppModule {}
