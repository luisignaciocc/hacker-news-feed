import { Article, ArticleDocument } from '../schemas';

export const mockArticle = (
  objectID = '28860486',
  created_at = '2021-10-14T04:20:53.000Z',
  title = null,
  url = null,
  author = 'cinquemb',
  points = null,
  story_text = null,
  comment_text = 'Yeah, even in state systems, i think some sort of gossip protocol could work as long as the part of the state is being decided on is not in contention with another nodes response during a round of sampling.',
  num_comments = null,
  story_id = 28844101,
  story_title = 'IoT hacking and rickrolling my high school district',
  story_url = 'https://whitehoodhacker.net/posts/2021-10-04-the-big-rick',
  parent_id = 28846809,
  created_at_i = 1634185253,
  is_deleted = false,
): Article => ({
  objectID,
  created_at,
  title,
  url,
  author,
  points,
  story_text,
  comment_text,
  num_comments,
  story_id,
  story_title,
  story_url,
  parent_id,
  created_at_i,
  is_deleted,
});

export const mockArticleDoc = (
  mock?: Partial<Article>,
): Partial<ArticleDocument> => ({
  objectID: mock?.objectID || '28860486',
  created_at: mock?.created_at || '2021-10-14T04:20:53.000Z',
  title: mock?.title || null,
  url: mock?.url || null,
  author: mock?.author || 'cinquemb',
  points: mock?.points || null,
  story_text: mock?.story_text || null,
  comment_text:
    mock?.comment_text ||
    'Yeah, even in state systems, i think some sort of gossip protocol could work as long as the part of the state is being decided on is not in contention with another nodes response during a round of sampling.',
  num_comments: mock?.num_comments || null,
  story_id: mock?.story_id || 28844101,
  story_title:
    mock?.story_title || 'IoT hacking and rickrolling my high school district',
  story_url:
    mock?.story_url ||
    'https://whitehoodhacker.net/posts/2021-10-04-the-big-rick',
  parent_id: mock?.parent_id || 28846809,
  created_at_i: mock?.created_at_i || 1634185253,
  is_deleted: mock?.is_deleted || false,
});

export const articleArray = [mockArticle(), mockArticle(), mockArticle()];

export const articleDocArray = [
  mockArticleDoc(),
  mockArticleDoc(),
  mockArticleDoc(),
];
