import Head from 'next/head'
import { useState, useEffect } from 'react'
import { fetchArticles, deleteArticle } from '../services'
import { formatDate } from '../utils'

export const Home = (): JSX.Element => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    const articles = await fetchArticles()
    const validArticles = articles.filter(
      (article) => article['story_title'] || article['title']
    )
    setArticles(validArticles)
  }

  const deleteRow = (e, articleID) => {
    e.preventDefault()
    deleteArticle(articleID).then(() => {
      init()
    })
  }

  return (
    <div className="container">
      <Head>
        <title>HN Feed</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>

      <main>
        <div className="title">
          <h1>HN Feed</h1>
          <h6>{'We <3 hacker news!'}</h6>
        </div>

        <div className="grid">
          {articles.length ? (
            articles.map((article) => (
              <a
                key={article['_id']}
                className="link"
                href={article['story_url'] ?? article['url']}
                target="_blank"
                rel="noreferrer"
              >
                <div className="row" key={article['objectID']}>
                  <p className="article-title">
                    {article['story_title'] ?? article['title']} -{' '}
                    <span className="article-author">{article['author']}</span>
                  </p>
                  <p className="article-publication-date">
                    {formatDate(article['created_at'])}
                  </p>
                  <p className="article-action">
                    <i
                      className="fa fa-trash-o delete-button"
                      onClick={(event) => deleteRow(event, article['objectID'])}
                    ></i>
                  </p>
                </div>
              </a>
            ))
          ) : (
            <h1>Oops! There are no items to display at the moment</h1>
          )}
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
        }

        main {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .title {
          background-color: #333333;
          color: #fefefe;
          width: 100%;
          font-family: 'Volkswagen Serial', cursive;
          font-size: xx-large;
          padding-left: 2em;
        }

        .title h1 {
          margin-bottom: 0.2em;
        }

        .title h6 {
          margin-top: 0.2em;
        }

        .grid {
          display: flex;
          flex-direction: column;
          padding: 2em;
        }

        .link {
          text-decoration: none;
        }

        .row {
          display: flex;
          border-bottom: 1px solid #ccc;
          padding-left: 1em;
          font-size: 13pt;
          color: #333;
        }

        .row:hover {
          background-color: #fafafa;
          cursor: pointer;
        }

        .article-title {
          flex: 7.5;
        }

        .article-author {
          color: #999;
        }

        .article-publication-date {
          flex: 1;
          text-align: -webkit-center;
        }

        .article-action {
          flex: 1;
          text-align: -webkit-center;
        }

        .row .delete-button {
          visibility: hidden;
        }

        .row:hover .delete-button {
          visibility: visible;
          cursor: context-menu;
        }

        @media (max-width: 768px) {
          .article-title {
            flex: 5;
          }

          .article-publication-date {
            flex: 3;
            align-self: center;
          }

          .article-publication-date {
            flex: 0.5;
            align-self: center;
          }
        }

        @media (max-width: 425px) {
          .title {
            padding-left: 0;
          }

          .title h1 {
            text-align: -webkit-center;
          }

          .title h6 {
            text-align: -webkit-center;
          }

          .row {
            font-size: 11pt;
          }

          .article-title {
            text-align: -webkit-center;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        @font-face {
          font-family: 'Volkswagen Serial';
          src: url('/fonts/VolkswagenSerial/volkswagen-serial-bold.ttf');
        }
      `}</style>
    </div>
  )
}

export default Home
