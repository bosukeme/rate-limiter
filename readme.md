# Rate Limiter Service

This Express.js service implements API rate limiting using Redis. It is designed to control access to specific resources based on predefined rate limit configurations.

## Features

- Rate limiting per identifier (e.g., user ID or IP) per resource.
- Configurable request limits and time windows.
- Redis-backed for performance and persistence.
- JSON request validation.
- Centralized error handling.

## Tech Stack

- **Node.js** with **TypeScript**
- **Express.js** - Web framework
- **Redis** - In-memory data store for rate limiting
- **Joi** - Schema validation
- **Custom middleware** for validation and error handling

## Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/bosukeme/rate-limiter.git
    cd url-shortener
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Environment Variables
    Create a .env file in the root directory and configure the following:

        ```bash
        PORT=3000
        REDIS_HOST=127.0.0.1
        REDIS_PORT=6379
        ```

4.  Run the server:
    ```bash
    npm run dev
    ```
    The API will be running at http://localhost:3000

## Testing

- You can use Postman to test the API.
- Import the provided Postman collection to quickly get started with testing the API endpoints.
- <a href="https://documenter.getpostman.com/view/8343801/2sB2cd3d32" target="_blank"> Postman Collection URL </a>

## Contributing

If you would like to contribute, please follow these steps:

- Fork the repository.
- Create a new branch for your feature or bugfix.
- Submit a pull request.

## Authors

Ukeme Wilson

- <a href="https://www.linkedin.com/in/ukeme-wilson-4825a383/">Linkedin</a>.
- <a href="https://medium.com/@ukemeboswilson">Medium</a>.
- <a href="https://www.ukemewilson.sbs/">Website</a>.
