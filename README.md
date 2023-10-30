# CRUD User Management

A simple CRUD (Create, Read, Update, Delete) application to manage users, built using React for the frontend, Node.js for the backend and MySQL for the Database.

## Table of Contents

- [Features](#features)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- List all users.
- Add a new user.
- Update an existing user's details.
- Delete a user.
- Responsive design for mobile and desktop views.

## Usage

- Open the application in your browser (usually it runs on `http://localhost:3000`).
- You can view the list of users, add a new user, update an existing user, or delete a user.

## API Endpoints

- **GET** `/users`: Retrieve a list of all users.
- **POST** `/users`: Add a new user.
  - Parameters: `name`, `email`, `phone`, `birthdate`
- **PUT** `/users/:id`: Update a user's details.
  - Parameters: `name`, `email`, `phone`, `birthdate`
- **DELETE** `/users/:id`: Delete a user.


## License

This project is licensed under the MIT License. See `LICENSE` for more information.
