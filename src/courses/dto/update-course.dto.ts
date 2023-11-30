import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDTO } from './create-course.dto';

export class UpdateCourseDTO extends PartialType(CreateCourseDTO) {}

//cria uma nova instacia baseada no createdcoursedto
// mais de forma parcial na qual todo os campos não precisa ser obrigatorio
