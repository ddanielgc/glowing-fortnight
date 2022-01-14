import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { NewsModule } from './news/news.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), NewsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
