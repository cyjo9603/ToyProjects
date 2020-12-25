import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    const movie = this.movies.find((movie) => movie.id === Number(id));

    if (!movie) throw new NotFoundException(`Movie with ID ${id} Not found`);

    return movie;
  }

  deleteOne(id: string): boolean {
    const deleteIndex = this.movies.findIndex(
      (movie) => movie.id === Number(id),
    );

    if (deleteIndex === -1)
      throw new NotFoundException(`Movie with ID ${id} Not found`);

    this.movies.splice(deleteIndex, 1);
    return true;
  }

  create(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  update(id: string, movieData) {
    const updateIndex = this.movies.findIndex(
      (movie) => movie.id === Number(id),
    );

    if (updateIndex === -1)
      throw new NotFoundException(`Movie with ID ${id} Not found`);

    this.movies[updateIndex] = { ...this.movies[updateIndex], ...movieData };
    return this.movies[updateIndex];
  }
}
