import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    const movie = this.movies.find((movie) => movie.id === id);

    if (!movie) throw new NotFoundException(`Movie with ID ${id} Not found`);

    return movie;
  }

  deleteOne(id: number): boolean {
    const deleteIndex = this.movies.findIndex((movie) => movie.id === id);

    if (deleteIndex === -1)
      throw new NotFoundException(`Movie with ID ${id} Not found`);

    this.movies.splice(deleteIndex, 1);
    return true;
  }

  create(movieData: CreateMovieDto) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  update(id: number, movieData: UpdateMovieDto) {
    const updateIndex = this.movies.findIndex((movie) => movie.id === id);

    if (updateIndex === -1)
      throw new NotFoundException(`Movie with ID ${id} Not found`);

    this.movies[updateIndex] = { ...this.movies[updateIndex], ...movieData };
    return this.movies[updateIndex];
  }
}
