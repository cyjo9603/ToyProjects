import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    return this.movies.find((movie) => movie.id === Number(id));
  }

  deleteOne(id: string): boolean {
    const deleteIndex = this.movies.findIndex(
      (movie) => movie.id !== Number(id),
    );

    if (deleteIndex === -1) return false;

    this.movies.splice(deleteIndex, 1);
    return true;
  }

  create(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }
}
