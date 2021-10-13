import { Module } from '@nestjs/common';
import { ArticlesModule } from 'src/articles/articles.module';
import { TaskService } from './task.service';

@Module({
  imports: [ArticlesModule],
  providers: [TaskService],
})
export class TaskModule {}
