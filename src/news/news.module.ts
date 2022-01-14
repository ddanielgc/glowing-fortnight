import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewRepository } from './news.repository';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';

@Module({
  imports: [TypeOrmModule.forFeature([NewRepository])],
  providers: [NewsService],
  controllers: [NewsController],
})
export class NewsModule {}
