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

## Web Interface

The application includes a user-friendly web interface that can be accessed by opening `http://localhost:3000` in your web browser. The interface provides:

- A form to add new users
- A list of all existing users
- Edit functionality through a modal window
- Delete functionality with confirmation
- Real-time error handling and success messages
- Responsive design for both desktop and mobile devices

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
├── public/          # Static files for the web interface
│   ├── app.js      # Client-side JavaScript
│   ├── index.html  # Main HTML file
│   └── styles.css  # CSS styles
├── routes/
│   └── users.js    # User routes and controllers
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

You can test the API in three ways:

1. **Using the Web Interface**
   - Open `http://localhost:3000` in your web browser
   - Use the provided forms and buttons to interact with the API

2. **Using Postman**
   - Import the API endpoints into [Postman](https://www.postman.com/)
   - Test each endpoint with custom data

3. **Using cURL Commands**
   ```bash
   # Get all users
   curl http://localhost:3000/api/users

   # Create a new user
   curl -X POST -H "Content-Type: application/json" \
     -d '{"name":"John Doe","email":"john@example.com"}' \
     http://localhost:3000/api/users

   # Get a specific user
   curl http://localhost:3000/api/users/1

   # Update a user
   curl -X PUT -H "Content-Type: application/json" \
     -d '{"name":"John Updated","email":"john.updated@example.com"}' \
     http://localhost:3000/api/users/1

   # Delete a user
   curl -X DELETE http://localhost:3000/api/users/1
   ```

## Features
- RESTful API with CRUD operations
- SQLite database for data persistence
- Modern web interface with responsive design
- Real-time updates
- Error handling and validation
- Development mode with auto-reload
