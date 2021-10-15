import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { mockArticle, articleDocArray } from './utils';

describe('ArticlesController', () => {
  let controller: ArticlesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticlesController],
      providers: [
        {
          provide: ArticlesService,
          useValue: {
            findAll: jest.fn().mockResolvedValue(articleDocArray),
            remove: jest.fn().mockImplementation((id: string) => {
              const mockArt = mockArticle();
              return Promise.resolve({
                _id: 'a uuid',
                objectID: id,
                is_deleted: true,
                ...mockArt,
              });
            }),
          },
        },
      ],
    }).compile();

    controller = module.get<ArticlesController>(ArticlesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of articles', async () => {
      expect(controller.findAll()).resolves.toEqual(articleDocArray);
    });
  });

  describe('remove', () => {
    it('should remove an article from the list', () => {
      const mockArt = mockArticle();
      expect(controller.remove(mockArt.objectID)).resolves.toEqual({
        _id: 'a uuid',
        is_deleted: true,
        ...mockArt,
      });
    });
  });
});
