import axios, { AxiosResponse } from 'axios'
import { Article } from '../utils'

const baseUrl = process.env.NEXT_PUBLIC_API_URL

const articlesUrl = baseUrl + '/articles'

export const fetchArticles = async (): Promise<Article[]> => {
  return axios
    .get(articlesUrl)
    .then((response: AxiosResponse<Article[], any>) => {
      return response.data
    })
}

export const deleteArticle = async (
  articleID: string
): Promise<Article | void> => {
  return axios
    .delete(articlesUrl + `/${articleID}`)
    .then((response: AxiosResponse<Article, any>) => {
      return response.data
    })
    .catch((error) => {
      console.error(error)
    })
}
