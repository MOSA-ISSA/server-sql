# Node.js server
Create a basic Node.js server using Express and Mongoose, with automatic server restart using nodemon.

- [`Node.js`](https://nodejs.org/en) is an open source server environment

## Getting Started

### 1. Set Up Your Project

Create a new directory for your project and navigate into it:

```bash
mkdir my-node-server
cd my-node-server
```

### 2. Initialize a Node.js Project
```bash
    npm init -y
```
### 3. Install Dependencies
```bash
    npm install express mongoose nodemon
```

- [`express`](https://expressjs.com/) : Web framework for Node.js.
- [`mongoose`](https://mongoosejs.com/): MongoDB ODM (Object Data Modeling).
- [`nodemon`](https://nodemon.io/): Utility to automatically restart the server during development.

## Project Structure

Create a new app and server file:
- [`./App.js`](./App.js)
- [`./Server.js`](./Server.js)

## Run the Server

Add a script to your 'package.json' file for running the server with nodemon:

```json
    "scripts": {
        "start": "nodemon server.js"
    }
```
This allows you to start your server using npm start.

Run your server:
```bash
    npm start
```

Your server will be accessible at `http://localhost:<port>`

##

## Organizing API Files

For better organization of your API-related files, create a new folder named `api` in your project root. This folder should contain the following subdirectories:

### [modules](./api/modules)

This folder is dedicated to modular components and schema definitions. You can place your Mongoose models and database schema files here.

### [controllers](./api/controllers)

The `controllers` folder is where you'll handle the business logic for your API routes. Each controller file can contain functions that represent different endpoints or actions.

### [routes](./api/routes)

In the `routes` folder, you can define your API routes using Express.js. These route files should link your `HTTP` methods (GET, POST, etc.) to the corresponding controller functions.

Here's an example directory structure:

```plaintext
node-server
|-- api
|   |-- modules
|   |   |-- testModule.js
|   |
|   |-- controllers
|   |   |-- Controller.js
|   |
|   |-- routes
|       |-- testRout.js
|
|-- app.js
|-- Sever.js
|-- package.json
|-- ...
```
By organizing your API files in this manner, you enhance the maintainability and scalability of your project, making it easier to manage and understand as it grows.