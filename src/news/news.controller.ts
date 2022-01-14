import { Body, Controller, Post } from '@nestjs/common';
import { CreateNewDto } from './dto/create-news.dto';
import { GetNewDto } from './dto/get-news.dto';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  constructor(private newsService: NewsService) {}

  @Post()
  async createAdminUser(
    @Body() createNewDto: CreateNewDto,
  ): Promise<GetNewDto> {
    const user = await this.newsService.createNew(createNewDto);
    return {
      user,
      message: 'Notícia com sucesso',
    };
  }
}
