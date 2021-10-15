import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesService } from './articles.service';
import { getModelToken } from '@nestjs/mongoose';
import { Model, Query } from 'mongoose';
import { Article, ArticleDocument } from './schemas';
import { mockArticle, articleArray, articleDocArray } from './utils';

describe('ArticlesService', () => {
  let service: ArticlesService;
  let model: Model<ArticleDocument>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ArticlesService,
        {
          provide: getModelToken(Article.name),
          useValue: Model,
        },
      ],
    }).compile();

    service = module.get<ArticlesService>(ArticlesService);
    model = module.get<Model<ArticleDocument>>(getModelToken(Article.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return all documents', async () => {
    jest.spyOn(model, 'find').mockReturnValue({
      sort: jest.fn().mockReturnThis(),
      exec: jest.fn().mockResolvedValueOnce(articleDocArray),
    } as any);
    const articles = await service.findAll();
    expect(articles).toEqual(articleArray);
  });

  it('should insert a new article', async () => {
    const mockArt = mockArticle();
    jest.spyOn(model, 'findOneAndUpdate').mockReturnValueOnce(mockArt as any);
    const updatedCat = await service.create(mockArt);
    expect(updatedCat).toEqual(mockArt);
  });

  it('should remove an article from the list', async () => {
    const mockArt = mockArticle();
    const deletedArticle = { ...mockArt, is_deleted: true };
    jest
      .spyOn(model, 'findOneAndUpdate')
      .mockReturnValueOnce(deletedArticle as any);
    const updatedCat = await service.remove(mockArt.objectID);
    expect(updatedCat).toEqual(deletedArticle);
  });
});
