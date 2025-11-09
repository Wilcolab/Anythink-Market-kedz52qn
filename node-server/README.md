# Node Server

This is a simple Express server project that listens on port 8001. 

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository** (if applicable):
   ```
   git clone <repository-url>
   cd node-server
   ```

2. **Install dependencies**:
   ```
   yarn install
   ```

3. **Run the server**:
   ```
   yarn start
   ```

The server will start and listen on port 8001. You can make changes to the code, and nodemon will automatically reload the server for you.

## Docker

To run the server in a Docker container, you can build the Docker image and run it using the following commands:

1. **Build the Docker image**:
   ```
   docker build -t node-server .
   ```

2. **Run the Docker container**:
   ```
   docker run -p 8001:8001 node-server
   ```

The server will be accessible at `http://localhost:8001`.

## License

This project is licensed under the MIT License.