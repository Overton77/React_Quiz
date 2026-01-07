# React-Quiz

A quiz application built using Vite, React, Node.js, and the React Context API.

## Description

React-Quiz is a web application that allows users to take quizzes about React. The quiz questions are fetched from a local API spun up by `json-server` utilizing a .json file of q-a-pairs. This project demonstrates the use of Vite for development and build processes, React for the UI, and the React Context API for state management. It features progress bars, timers, scores, high scores, and minimal error handling.

## Features

- Dynamic quiz questions fetched from a local API
- State management using React Context API
- Progress bars to track quiz completion
- Timers for each quiz question
- Score tracking and high scores
- Minimal error handling
- Fast development and build processes with Vite
- Linting with ESLint to ensure code quality

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/react-quiz.git
   ```

2. **Install dependencies**

   ```node
   npm install``

3. **To start the json server and application at once**

   ```node
   npm run start:all
   ```

4. **To run the server individually and then the application**

   ```node
   npm run server && npm run dev

   ```

5. **To build for production and preview**
 ```node
npm run build
```

6. **To run a preview**
``` node
npm run preview
``` 

Technologies Used
Vite
React
Node.js
React Context API
JSON Server
ESLint
Author
Overton
License
This project is licensed under the ISC License.
