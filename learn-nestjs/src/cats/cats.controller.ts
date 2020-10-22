import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly appService: CatsService) {}

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
