export class CreateArticleDto {
  created_at: string;
  title: string | null;
  url: string | null;
  author: string;
  points: string | null;
  story_text: string | null;
  comment_text: string;
  num_comments: number | null;
  story_id: number;
  story_title: string | null;
  story_url: string;
  parent_id: number;
  created_at_i: number;
  _tags: string[];
  objectID: string;
  _highlightResult: {
    author: {
      value: string;
      matchLevel: string;
      matchedWords: string[];
    };
    comment_text: {
      value: string;
      matchLevel: string;
      fullyHighlighted: boolean;
      matchedWords: string[];
    };
    story_title: {
      value: string;
      matchLevel: string;
      matchedWords: string[];
    };
    story_url: {
      value: string;
      matchLevel: string;
      matchedWords: string[];
    };
  };
}
