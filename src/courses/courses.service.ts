import { Injectable, NotFoundException } from '@nestjs/common';
import { Course } from './entities/courses.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly couserRepository: Repository<Course>,
  ) {}

  async findAll() {
    // Obtém todos os cursos
    return this.couserRepository.find();
  }

  async findOne(id: number) {
    // Tenta encontrar o curso por ID
    const course = await this.couserRepository.findOne({
      where: { id },
    });

    if (!course) {
      //throw new HttpException(`Course ID ${id} not found`, HttpStatus.NOT_FOUND)
      throw new NotFoundException(`Course ID ${id} not found`);
    }

    return course;
  }

  async create(createCourseDTO: any) {
    // Cria um novo curso
    const course = this.couserRepository.create(createCourseDTO);

    // Salva o novo curso no banco de dados
    return this.couserRepository.save(course);
  }

  async update(id: number, updateCourseDTO: any) {
    // Tenta carregar o curso existente
    const course = await this.couserRepository.preload({
      ...updateCourseDTO,
      id,
    });

    if (!course) {
      throw new NotFoundException(`Course ID ${id} not found`);
    }

    // Salva o curso alterado no banco de dados
    return this.couserRepository.save(course);
  }

  async remove(id: number) {
    // Tenta encontrar o curso por ID
    const course = await this.couserRepository.findOne({
      where: { id },
    });

    if (!course) {
      throw new NotFoundException(`Course ID ${id} not found`);
    }

    // Remove o curso do banco de dados
    return this.couserRepository.remove(course);
  }
}
