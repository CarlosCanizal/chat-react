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

## Run local Socket IO Server
_By default Chat App is connected with a remote Socket IO server._

If you want to run local Socket IO Server please run first:

```sh
node server/server.js
```

This will start the Socket IO server in port :8080

After start the Socket IO server run:

```sh
REACT_APP_IO_SERVER=localhost:8080 npm start
```

REACT_APP_IO_SERVER is an environment variable, you can pass any Socket IO Server you prefer

## Error connecting Socket IO server
If server cannot connect you will get message below:

![alt text](https://imgur.com/UR0NfZi.png)

## Chat Features
You can send messages with youtube links or images and will be embed.

![alt text](https://imgur.com/swbSg8U.png)

## Settings
- Select Avatar
- Select Nickname
- Select Language
- Select Hours Format
- Send Enter Options

## Notifications
If you receive a notification **Messages** tab will blink and shows number of unread messages unitl read them.

![alt text](https://i.imgur.com/BR2VE2Y.png)

## TODO
- Convert links in message to anchors.
- Other user is typing.