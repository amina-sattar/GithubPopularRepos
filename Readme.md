# Discover Pupular Github Repositories

## Description

The idea of this project is to implement a backend application for discovering popular
repositories on GitHub.

**Service Specification**

The service should be able to provide:

- A list of the most popular repositories, sorted by number of stars.
- An option to be able to view the top 10, 50, 100 repositories should be available.
- Given a date, the most popular repositories created from this date onwards should
  be returned.
- A filter for the programming language would be a great addition to have.

## Getting Started:

This project has been built using express.js, jest for unit testing, express-validator has been used for request validations. It also uses dotenv package to load environment variables from the .env file to the project environment.

### Dependencies

- Node JS v16+(built using v16.14.2)

### Installation

- Run `npm install` in the root of the project to intsall all the dependencies

### Configurations

- The project stores the port on which application runs and github search url in the .env file. You can change the port configuration in the .env file, When not provided, it will run on the default 3000 port.

### Running the service

- Run `npm start` command from the root of the project, it will start listening on the port configured on the above step.

### Exposed Enpoints

- /popular-repositories
  - It returns the most popular github repositories sorted by number of stars in descending order
  - Optional Query Parameters
    - repoCount - Number of repositories to return between 1-100, default value is 30
    - createdFrom - Date in ISO8601 format to return repositores created from this date onwards
    - language - A string for language filter

### Testing

- ### Unit Tests:
  - Run `npm test` command to execute the unit tests.
