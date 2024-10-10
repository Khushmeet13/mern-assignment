# MERN Assignment

This project is a MERN (MongoDB, Express.js, React.js, Node.js) stack application that allows users to register and log in.

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

- Node.js (version 14.x or higher)
- MongoDB (either locally or through MongoDB Atlas)
- npm (Node package manager, comes with Node.js)

### Clone the Repository

Clone this repository to your local machine using:
```bash
git clone https://github.com/khushmeet13/mern-assign.git
cd mern-assignment

Set Up the Backend

Navigate to the backend directory:
cd backend


Install backend dependencies:
npm install

Set up your MongoDB connection in app.js (if using MongoDB Atlas, replace the connection string):

mongoose.connect('mongodb://localhost:27017/mernApp', { useNewUrlParser: true, useUnifiedTopology: true });
Start the backend server:
node app.js

Set Up the Frontend

Navigate to the frontend directory:
cd ../frontend

Install frontend dependencies:
npm install

Start the React application:
npm start

Usage
Register a new user using the registration form.
Log in with the registered credentials.
Navigate to the home page to view registered users.