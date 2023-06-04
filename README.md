# welcome to flights service

## project setup

- clone the project on your local
- execute `npm install` on the same path as of your root directory of the downloaded project
- create a `.env` file in the root directory and add the following environment variable
  - `PORT=3000`
- inside the `src/config` folder create a new file `config.json` and then add the following piece of code
- ```{
    "development": {
      "username": <YOUR_DB_LOGIN_NAME>,
      "password": <YOUR_DB_PASSWORD>,
      "database": "Flights_Search_DB_DEV",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
  }
  ```
- once you added your DB configuration as listed above , go to the src folder from your terminal and execute `npx sequelize db:create`
  and then execute
  `npx sequelize db:migrate`

## DB Design

- Airplane table
- Flight
- Airport
- City

- A flight belongs to an airplane but one airplane can be used in multiple flights.
- A city has many airports but one airport belongs to a city.
- One airport can have many flights, but a flight belongs to one airport.
