# Node.js SQLite API with Web Interface

A full-stack web application built with Node.js, Express, and SQLite, featuring both a RESTful API and a modern web interface for user management. This application provides CRUD operations through both API endpoints and a user-friendly web interface.

## Features

- 🚀 Full RESTful API implementation
- 💻 Modern web interface with responsive design
- 📱 Mobile-friendly UI
- 🔄 Real-time updates
- 🎯 CRUD operations for user management
- 🗄️ SQLite database for data persistence
- ✨ Clean and intuitive user interface
- 🛡️ Error handling and validation
- 🔄 Development mode with auto-reload

## Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)
- Modern web browser

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
├── app.js           # Application entry point and server configuration
├── database.js      # Database configuration and SQL query wrapper functions
├── database.sqlite  # SQLite database file (auto-generated)
├── .env            # Environment variables configuration
├── .gitignore      # Git ignore configuration
├── public/         # Static files for the web interface
│   ├── app.js     # Client-side JavaScript for UI interactions
│   ├── index.html # Main HTML file with user interface
│   └── styles.css # CSS styles for modern UI design
├── routes/
│   └── users.js   # User-related API routes and controllers
└── package.json    # Project dependencies and scripts
```

### Key Components

- **Backend**
  - `app.js`: Express server setup, middleware configuration, and route integration
  - `database.js`: SQLite database connection and Promise-based query methods
  - `routes/users.js`: API endpoints for user management

- **Frontend**
  - `public/index.html`: Responsive web interface with forms and user list
  - `public/app.js`: Frontend JavaScript for API integration and DOM manipulation
  - `public/styles.css`: Modern CSS styling with responsive design

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

## API Documentation

### Endpoints Overview

- `GET /api/users` - Retrieve all users
- `GET /api/users/:id` - Retrieve a specific user
- `POST /api/users` - Create a new user
- `PUT /api/users/:id` - Update an existing user
- `DELETE /api/users/:id` - Delete a user

### Testing Methods

1. **Web Interface (Recommended)**
   - Navigate to `http://localhost:3000` in your browser
   - Use the intuitive UI to:
     - View all users in a responsive list
     - Add new users through the form
     - Edit users via the modal dialog
     - Delete users with confirmation

2. **API Testing Tools**
   - Use [Postman](https://www.postman.com/) or similar tools
   - Import the following endpoints:
     ```
     GET    http://localhost:3000/api/users
     GET    http://localhost:3000/api/users/:id
     POST   http://localhost:3000/api/users
     PUT    http://localhost:3000/api/users/:id
     DELETE http://localhost:3000/api/users/:id
     ```

3. **cURL Commands**
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

## Development

### Available Scripts

- `npm start`: Run the application in production mode
- `npm run dev`: Run the application in development mode with auto-reload

### Error Handling

The application includes comprehensive error handling:

- Frontend: Visual error messages with automatic dismissal
- Backend: Proper HTTP status codes and error messages
- Database: SQLite error handling and connection management

### Future Enhancements

Potential improvements that could be added:

1. User authentication and authorization
2. Input validation middleware
3. Data pagination for large datasets
4. Unit and integration tests
5. Docker containerization

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
