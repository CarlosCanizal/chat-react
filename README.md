# Chat with React and Socket IO
You can test it online [DEMO](https://github.com/facebook/create-react-app).

## Installation

In the project directory, run command:

### `npm install`

## Start Application

In the project directory, run command:

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

This will start the Chat App with default remote Socket IO server. 

If you want to run local Socket IO Server please run first:

### `node server.js`

After start the Socket IO server run:

### `REACT_APP_IO_SERVER=localhost:3000 npmstart`

REACT_APP_IO_SERVER is an environment variable, you can pass any Socket IO Server you prefer