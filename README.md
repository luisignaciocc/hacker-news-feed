# Hacker News Feed

Javascript application made with React, NextJS, Typescript, NestJS, MongoDB, and Docker. Build for listing the HackerNews feed.

## Usage

You can start this application with docker-compose

```bash
docker-compose up -d
```

This will build the images and start the application. By default the client is exposed on port `3426`, so you can access the application in [http://localhost:3426](http://localhost:3426).

Additionally, the API is exposed on port `3246`, and the documents database on port `27717`. If you want to change this, you should edit the `.env` file before starting the app.

```bash
# CLIENT ENV
CLIENT_EXPOSED_PORT=3426

# API ENV
API_EXPOSED_PORT=3246

# MONGO ENV
MONGO_EXPOSED_PORT=27717
MONGO_PASS=WpJHhbPpkZS6RcfK
```

## Development

To start developing the application, you have two folders, one with the client app, and the other with the API.

On the client-side, you must first create a `.env` file to load the environment variables (loaded by docker-compose in the prod environment). You must set the URL where the API is running on.

```bash
cd app-client
# Set the api url
echo "NEXT_PUBLIC_API_URL=http://127.0.0.1:3246" > .env
yarn install
yarn dev
```

To test the front-end, you must run:

```bash
yarn run test-all
```

On the server-side, you must equally create a `.env` file to load the environment variables. You must set the database connection settings.

```bash
cd app-server
echo "DB_HOST=localhost" >> .env
echo "DB_PORT=27017" >> .env
echo "DB_USER=admin" >> .env
echo "DB_PASS=adminpass" >> .env
echo "DB=admin" >> .env
echo "PORT=3246" >> .env
echo "HN_API_ENDPOINT=https://hn.algolia.com/api/v1/search_by_date?query=nodejs" >> .env
yarn install
yarn start:dev
```

To test the back-end, you must run:

```bash
yarn run lint
yarn run test
```

And to see tests coverage:

```bash
yarn run test:cov
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
