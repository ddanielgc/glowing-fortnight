import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateNewDto } from './dto/create-news.dto';
import { New } from './news.entity';
import { NewRepository } from './news.repository';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(NewRepository)
    private newRepository: NewRepository,
  ) {}

  async createNew(createNewDto: CreateNewDto): Promise<New> {
    return this.newRepository.createNew(createNewDto);
  }
}
