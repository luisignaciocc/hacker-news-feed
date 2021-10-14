import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, Timeout } from '@nestjs/schedule';
import axios, { AxiosResponse } from 'axios';
import { ArticlesService } from 'src/articles/articles.service';
import { ApiResponse } from './dto';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const axiosRetry = require('axios-retry');

axiosRetry(axios, { retries: 3, retryDelay: axiosRetry.exponentialDelay });

@Injectable()
export class TaskService {
  constructor(private articlesService: ArticlesService) {}
  private readonly logger = new Logger(TaskService.name);

  @Cron(CronExpression.EVERY_HOUR)
  handleCron() {
    axios
      .get(process.env.HN_API_ENDPOINT)
      .then((response: AxiosResponse<ApiResponse, any>) => {
        this.logger.log('Fetching Articles');
        response.data.hits.map(async (article) => {
          await this.articlesService.create(article);
        });
      })
      .catch((error) => {
        this.logger.error('Error fetching from hacker news api');
        this.logger.error(error);
      });
  }

  @Timeout(100)
  seedDB() {
    this.logger.log('Populating Database');
    this.handleCron();
  }
}
