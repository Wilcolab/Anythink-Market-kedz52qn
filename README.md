# Node Server (migrated from Python)

This project has been migrated from Python to Node.js, maintaining the exact same functionality as the original implementation. The service provides basic task management endpoints and persists data using the same data model.

## Project Structure 

The Node.js implementation is located in the `node-server` directory, replacing the previous Python FastAPI server. The Python implementation has been preserved in the `python-server` directory for reference.

## API Routes

The Node server maintains feature parity with the original Python implementation:

- `POST /tasks`
  - Creates a new task
  - Request body: `{ "title": "Task name" }`
  - Returns the created task

- `GET /tasks`
  - Returns the list of all tasks

Example usage:
```shell
curl -X POST http://localhost:8000/tasks -H "Content-Type: application/json" -d '{"title":"Buy milk"}'
curl http://localhost:8000/tasks
```

## Getting Started

Run the server using Docker Compose:

```shell
docker compose up --build
```

The server will be available at `http://localhost:8000` (or the port specified in your docker-compose.yml).

## Migration Notes

- This is a like-for-like migration from Python to Node.js
- No changes were made to the API contract or functionality
- Both implementations use the same data model for tasks
- The Python implementation remains available for reference

