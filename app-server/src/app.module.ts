import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TaskModule } from './scheduler/task.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ArticlesModule } from './articles/articles.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: `mongodb://${configService.get<string>(
          'DB_USER',
        )}:${configService.get<string>('DB_PASS')}@${configService.get<string>(
          'DB_HOST',
        )}/${configService.get<string>('DB')}`,
      }),
      inject: [ConfigService],
    }),
    TaskModule,
    ArticlesModule,
  ],
})
export class AppModule {}
