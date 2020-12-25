import { Module } from '@nestjs/common';
import { MoviesController } from '../movies/movies.controller';
import { MoviesService } from '../movies/movies.service';

@Module({
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
