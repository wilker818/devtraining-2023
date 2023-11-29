import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses') //prfixo
export class CoursesController {
  constructor(private readonly cousersService: CoursesService) {}

  @Get('list') // courses/list  aqui o list seria um path
  findAll() {
    return this.cousersService.findAll();
  }

  @Get('list/:id') // courses/list/20(:id)  aqui é a listagem especifica de um item por ID
  findOne(@Param() params: any) {
    return this.cousersService.findOne(+params.id);
  }

  @HttpCode(201)
  @Post()
  create(@Body() body: any) {
    return this.cousersService.create(body);
  }

  @Put('list/:id')
  update(@Param('id') id: number, @Body() body) {
    return this.cousersService.update(+id, body);
  }

  @HttpCode(204)
  @Delete('list/:id')
  remove(@Param('id') id: number) {
    return this.cousersService.remove(+id);
  }
}
