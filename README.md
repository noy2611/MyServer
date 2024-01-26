# MyServer

Welcome to MyServer, a Node HTTP server application designed for managing evacuation plans. This project provides a set of functionalities to create, read, update, and delete evacuation plans, crucial for handling various crisis scenarios.

## Features

- **Create Evacuation Plans:** Add new evacuation plans, specifying details such as name, location, and additional information.

- **Read Evacuation Plans:** Retrieve information about all plans or access details for a specific plan based on its unique identifier.

- **Update Evacuation Plans:** Modify the details of an existing plan, ensuring that the information remains up-to-date.

- **Delete Evacuation Plans:** Permanently remove plans from the system when they are no longer relevant.

- **Routing:** Basic routing mechanisms are implemented to handle HTTP GET, POST, PUT, and DELETE requests.

- **Data Storage:** Evacuation plans are stored in a JSON file (data.json). The server supports CRUD operations to effectively manage these plans.

## API Documentation

Explore the API using Postman: [Evacuation Plans API](https://documenter.getpostman.com/view/32008774/2s9YypDN43)

## Getting Started

Before running the server, ensure you have the following dependencies installed:

- Node.js: [Download Node.js](https://nodejs.org/)

To start the server, run the following command:

node index.js

## Fullstack Course First Assignment
- This server project serves as the first assignment in the fullstack course. It is a foundational piece for understanding HTTP server development and CRUD operations.
