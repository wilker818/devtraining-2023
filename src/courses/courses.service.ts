import { Injectable } from '@nestjs/common';
import { Course } from './courses.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Fundamentos da framework VUE',
      description: 'Cuso sobre fundamentos da framework nest.js e swagger',
      tags: ['node.js', 'nest.js', 'javascript', 'typescript'],
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: number) {
    return this.courses.find((course) => course.id === id);
  }

  create(createCourseDTO: any) {
    this.courses.push(createCourseDTO);
  }

  update(id: number, updateCourseDTO: any) {
    const existingCourse = this.findOne(id);
    if (existingCourse) {
      const indexItem = this.courses.findIndex((course) => course.id === id);
      this.courses[indexItem] = { id, ...updateCourseDTO };
    }
  }

  remove(id: number) {
    const indexItem = this.courses.findIndex((course) => course.id === id);
    if (indexItem >= 0) {
      this.courses.splice(indexItem, 1);
    }
  }
}
