import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('news')
export class New extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true, type: 'varchar', length: 200 })
  title: string;

  @Column({ nullable: true, type: 'varchar', length: 200 })
  description: string;

  @Column({ nullable: true, type: 'varchar', length: 100 })
  link: string;

  @Column({ nullable: false, type: 'text' })
  content: string;

  @Column({ nullable: true, type: 'varchar', length: 100 })
  author: string;

  @Column({ nullable: true, type: 'varchar', length: 100 })
  image: string;

  @Column({ nullable: true, type: 'varchar', length: 30 })
  category: string;

  @Column({ nullable: false, default: true })
  status: boolean;

  @CreateDateColumn()
  publishDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
