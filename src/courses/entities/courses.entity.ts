import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('courses') // nome da tabela no banco de dados
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('json', { nullable: true })
  tags: string[];
}
