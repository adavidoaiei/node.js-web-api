# Node.js SQLite API

A simple RESTful API built with Node.js, Express, and SQLite. This application provides basic CRUD operations for managing users.

## Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd node.js
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```
PORT=3000
```

## Running the Application

For development (with auto-reload):
```bash
npm run dev
```

For production:
```bash
npm start
```

The server will start at `http://localhost:3000`

## API Endpoints

### Users

- **GET `/api/users`** - Get all users
- **GET `/api/users/:id`** - Get a specific user by ID
- **POST `/api/users`** - Create a new user
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com"
  }
  ```
- **PUT `/api/users/:id`** - Update an existing user
  ```json
  {
    "name": "John Doe Updated",
    "email": "john.updated@example.com"
  }
  ```
- **DELETE `/api/users/:id`** - Delete a user

## Project Structure

```
.
├── app.js           # Application entry point
├── database.js      # Database configuration and queries
├── database.sqlite  # SQLite database file
├── routes/
│   └── users.js     # User routes and controllers
└── package.json
```

## Database Schema

### Users Table
```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
```

## Testing the API

You can test the API using tools like [Postman](https://www.postman.com/) or using cURL commands:

Example:
```bash
# Get all users
curl http://localhost:3000/api/users

# Create a new user
curl -X POST -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com"}' \
  http://localhost:3000/api/users
```
# node.js-web-api
