# Photo Browser

## About the app

- The app uses [React](https://reactjs.org/).
- The app uses [redux](https://github.com/reduxjs/redux) for managing app state.
- The app uses [redux-thunk](https://github.com/reduxjs/redux-thunk) for async actions.
- Images are fetched from [JSON Placeholder](https://jsonplaceholder.typicode.com/photos).
- Source code is available on [GitHub](https://github.com/popprr/photobrowser).

The project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) CLI tool.


## Running the app locally

To run the app locally, you need to clone the repo and then run the following commands.
```
$ cd [PROJECT DIRECTORY]
$ npm install
$ npm start
```

This installs the deps and starts the dev server. The app is now accessible at `http://localhost:3000/`.

## Live app

The app is also accessible on [Heroku](https://simple-photobrowser.herokuapp.com/).


## Features

- When you are viewing a photo's details, you can move to previous/next photo with the arrow (left/right) keys, and exit the details view with the Escape key.