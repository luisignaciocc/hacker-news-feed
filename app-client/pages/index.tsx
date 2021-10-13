import Head from 'next/head'

export const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>HN Feed</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <div className="title">
        <h1>HN Feed</h1>
        <h6>{'We <3 hacker news!'}</h6>
      </div>

      <div className="grid">
        <div className="row">
          <div className="flex-separator" />
          <p className="article-title">
            ajsdhfkljasbnvkahjvda uadfuvhac adfuivbnc adifjvbhjcx
          </p>
          <p className="article-publication-date">19:33 P.M.</p>
          <p className="article-action">Borrar</p>
        </div>
        <div className="separator" />
        <div className="row">
          <div className="flex-separator" />
          <p className="article-title">
            ajsdhfkljasbnvkahjvda uadfuvhac adfuivbnc adifjvbhjcx
          </p>
          <p className="article-publication-date">19:33 P.M.</p>
          <p className="article-action">Borrar</p>
        </div>
        <div className="separator" />
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
        padding-top: 2em;
      }

      .row {
        display: flex;
        font-size: large;
      }

      .flex-separator {
        flex: 0.5;
      }

      .article-title {
        flex: 7.5;
      }

      .article-publication-date {
        flex: 1;
      }

      .article-action {
        flex: 1;
      }

      .separator {
        border-bottom: 1px solid #999;
        width: 95%;
        align-self: center;
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
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

export default Home
