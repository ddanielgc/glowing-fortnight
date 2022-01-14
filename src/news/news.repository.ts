import { EntityRepository, Repository } from 'typeorm';
import { New } from './news.entity';
import { CreateNewDto } from './dto/create-news.dto';
import {
  ConflictException,
  InternalServerErrorException,
  BadRequestException,
} from '@nestjs/common';

@EntityRepository(New)
export class NewRepository extends Repository<New> {
  async createNew(createNewDto: CreateNewDto): Promise<New> {
    const {
      title,
      description,
      link,
      content,
      image,
      category,
      author,
      publishDate,
    } = createNewDto;

    // validations
    if (!content) throw new BadRequestException('Content is required');

    const newObj = this.create();

    newObj.title = title;
    newObj.description = description;
    newObj.link = link;
    newObj.content = content;
    newObj.image = image;
    newObj.category = category;
    newObj.author = author;
    newObj.publishDate = publishDate;

    try {
      await newObj.save();
      return newObj;
    } catch (error) {
      console.log(
        '🚀 ~ file: news.repository.ts ~ line 38 ~ NewRepository ~ createNew ~ error',
        error,
      );
      if (error.code.toString() === '23505') {
        throw new ConflictException('Conflict');
      } else {
        throw new InternalServerErrorException(
          'Erro ao salvar o usuário no banco de dados',
        );
      }
    }
  }
}
