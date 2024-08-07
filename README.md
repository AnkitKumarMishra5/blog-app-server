## Setup Instructions

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file with the following content:
  MONGO_URI=<your-mongodb-connection-string>
  JWT_SECRET=<your-jwt-secret>
  PORT=4000
4. Start the server: `npm run dev`

## Project Structure

- `controllers`: Contains the request handlers
- `middleware`: Contains middleware functions
- `models`: Contains the Mongoose models
- `routes`: Contains the route definitions
- `config`: Contains configuration files

## API Endpoints

- `POST /api/signup`: Registers a new user
- `POST /api/login`: Authenticates a user
- `POST /api/post`: Creates a new post (authenticated)
- `GET /api/posts`: Retrieves all posts
- `GET /api/posts/user`: Retrieves posts by a specific author

## Development

- The backend uses Node.js and Express.
- JWT is used for authentication.
- MongoDB is used for data storage.
