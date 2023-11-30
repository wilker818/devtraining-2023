import { IsString } from 'class-validator';

export class CreateCourseDTO {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsString({ each: true }) // Para cada validator do array é string
  readonly tags: string[];
}
