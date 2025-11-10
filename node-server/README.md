# JavaScript Express Server

This project is a simple Express server application that listens on port 8001. It is set up to use Nodemon for automatic code reloading during development.

## Project Structure

```
js-express-server
├── src
│   ├── index.js          # Entry point of the application
│   ├── app.js            # Express application setup
│   ├── controllers       # Future controller logic
│   ├── routes            # Future route definitions
│   ├── middleware        # Future middleware functions
│   └── config            # Configuration settings
├── .gitignore            # Files to ignore in git
├── .dockerignore         # Files to ignore when building the Docker image
├── Dockerfile            # Dockerfile for building the server image
├── package.json          # npm configuration file
├── yarn.lock             # Dependency version lock file
├── nodemon.json          # Nodemon configuration file
└── README.md             # Project documentation
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd js-express-server
   ```

2. **Install dependencies:**
   ```
   yarn install
   ```

3. **Run the server:**
   ```
   yarn start
   ```

- The Node.js server should now be running. You can access it at port `8001`.

## Docker

To build and run the Docker container, use the following commands:

1. **Build the Docker image:**
   ```
   docker build -t js-express-server .
   ```

2. **Run the Docker container:**
   ```
   docker run -p 8001:8001 js-express-server
   ```

The server will be accessible at `http://localhost:8001`.

## Migration from the Python server

This project is a migration of the Python server located in the sibling folder `python-server`. It is a server migration only (there is no database) and aims to reproduce the same HTTP surface, request/response contracts, and error semantics implemented in the original Python implementation.

Key points
- Origin: see the `python-server` folder for the original implementation and reference behavior.
- Parity: routes, input validation, and response formats from the Python server were preserved where practical; tests and integration checks should exercise the same endpoints.
- Configuration: runtime configuration and environment variables from the Python server should be mapped to this Node/Express implementation; the server defaults to port 8001.
- Differences: implementation details (language, libraries, and internal structure) differ; any behavior changes are intentional and documented in code comments where needed.

How to validate
- Run the original Python server and this Node server side-by-side and compare key endpoints with curl or an HTTP client (e.g. curl http://localhost:8001/<endpoint>).
- Check the `python-server` sources for expected endpoints and input/output examples to confirm parity.

For more details about specific endpoints or configuration names, consult the corresponding files in `python-server`.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

