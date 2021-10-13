import { Module } from '@nestjs/common';
import { TaskModule } from './scheduler/task.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ArticlesModule } from './articles/articles.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TaskModule,
    ScheduleModule.forRoot(),
    ArticlesModule,
    MongooseModule.forRoot('mongodb://admin:12345678@127.0.0.1:27017/admin'),
  ],
})
export class AppModule {}
