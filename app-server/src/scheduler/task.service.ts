import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import axios, { AxiosResponse } from 'axios';
import { ArticlesService } from 'src/articles/articles.service';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const axiosRetry = require('axios-retry');
import { ApiResponse } from './dto';

axiosRetry(axios, { retries: 3, retryDelay: axiosRetry.exponentialDelay });

@Injectable()
export class TaskService {
  constructor(private articlesService: ArticlesService) {}
  private readonly logger = new Logger(TaskService.name);

  @Cron(CronExpression.EVERY_HOUR)
  handleCron() {
    axios
      .get('https://hn.algolia.com/api/v1/search_by_date?query=nodejs')
      .then((response: AxiosResponse<ApiResponse, any>) => {
        response.data.hits.map(async (article) => {
          await this.articlesService.create(article);
        });
      })
      .catch(function (error) {
        this.logger.error('Error fetching from hacker news api');
        this.logger.error(error);
      });
  }
}
