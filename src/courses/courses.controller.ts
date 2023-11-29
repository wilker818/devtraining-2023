import {Controller, Get} from '@nestjs/common';

@Controller('courses') //prfixo
export class CoursesController {

    @Get('list') // courses/list  aqui o list seria um path
    findAll() {
        return "Listagem de cursos"
    }
}
