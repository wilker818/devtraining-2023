import {Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Res} from '@nestjs/common';

@Controller('courses') //prfixo
export class CoursesController {

    @Get('list') // courses/list  aqui o list seria um path
    findAll(@Res() response) {
        return response.status(200).json({
            message: "Listagem de cursos"
        });
    }

    @Get('list/:id') // courses/list/20(:id)  aqui é a listagem especifica de um item por ID
    findOne(@Param() params: any) {
        return `Curso com ID ${params.id}`
    }

    @HttpCode(201)
    @Post()
    create(@Body() body: object) {
        return body;
    }

    @Patch('list/:id')
    update(@Param('id') id: string, @Body() body) {
        console.log("teste", body)
        return `Update course with ID ${id}`
    }

    @HttpCode(204)
    @Delete('list/:id')
    remove(@Param('id') id: string) {
        return `Delete course with ID ${id}`
    }
}
