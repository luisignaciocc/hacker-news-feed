export type Article = {
  _id: string
  objectID: string
  __v: number
  author: string
  comment_text: string
  created_at: string
  created_at_i: number
  is_deleted: boolean
  num_comments: number | null
  parent_id: number
  points: number | null
  story_id: number
  story_text: string | null
  story_title: string | null
  story_url: string | null
  title: string | null
  url: string | null
}
