import { Controller, Get, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { AppService } from './app.service';
import { UploadService } from './upload/upload.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly uploadService: UploadService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('image'))
  async uploadImage(@UploadedFile() file, @Res() res) {
    const result = await this.uploadService.uploadObject(file);

    if (!result) return res.status(505).json({ message: 'fila upload' });

    res.json({ path: result });
  }
}
