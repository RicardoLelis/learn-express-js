# learn-express-js
This is a Web Dev Simplified "Learn Express JS In 35 Minutes" tutorial


Setup basic package:
npm init -y

install express library:
npm i express

install nodemon to allow auto restart our server on save as a dev dependency:
npm i --save-dev nodemon

add nodemon starting point in the scripts section on package.json file:
 "scripts": {
    "devStart": "nodemon server.js"
  }

create server.js file in our project directory:
This is where we're going to put all our server code.

to run the app in dev mode, just enter cmd below in the cli:
npm run devStart

