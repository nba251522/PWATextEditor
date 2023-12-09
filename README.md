# PWA Text Editor

## Technology Used

| Technology    | Resource URL                                                     |
|---------------|------------------------------------------------------------------|
| Node.js       | [Node.js](https://nodejs.org/)                                   |
| idb           | [idb](https://www.npmjs.com/package/idb)                         |
| Webpack       | [Webpack](https://webpack.js.org/)                               |
| Workbox       | [Workbox](https://developers.google.com/web/tools/workbox)       |
| JavaScript    | [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |
| Heroku        | [Heroku](https://www.heroku.com/)                                |

## Description

This PWA Text Editor is a sophisticated single-page application that runs in the browser and functions offline. Built to meet the criteria of a Progressive Web Application, it incorporates several data persistence techniques to ensure redundancy in various browser environments. The app uses the `idb` package, a lightweight wrapper around the IndexedDB API, for data storage and retrieval. It can be used to create and save notes or code snippets, ensuring their availability even without an internet connection.

[App Deployment Link](https://cryptic-dusk-47758-a6978287360b.herokuapp.com/)

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Deployment](#deployment)
- [Author Info](#author-info)
- [Credits](#credits)
- [License](#license)

## Installation

1. Clone the starter code repository: `git clone [repository URL]`
2. Navigate to the cloned directory and run `npm install` to install dependencies.
3. Start the application using `npm run start` from the root directory.

## Usage

Run the application from the terminal. This will bundle your JavaScript files using webpack and start up both the backend and the client. The application features a generated HTML file, service worker, and a manifest file, ensuring it functions as a PWA.

## Features

- **Data Persistence**: Utilizes IndexedDB for storing and retrieving text data.
- **Offline Functionality**: Works offline using service workers and cached assets.
- **Client-Server Structure**: Well-defined structure for easy maintenance and scalability.
- **Next-Gen JavaScript Support**: Compatible with modern JavaScript features.
- **Easy Installation**: Offers an 'Install' button for adding the application icon to the desktop.
- **Service Worker Registration**: Uses Workbox for efficient caching strategies.

## Deployment

- Follow the [Heroku Deployment Guide](https://devcenter.heroku.com/articles/getting-started-with-nodejs) for deploying a full-stack webpack application on Heroku.

## Author Info

**Thomas Er**
- [LinkedIn](https://www.linkedin.com/in/thomas-er-9b77321b9)
- [Github](https://github.com/nba251522)
- [Portfolio](https://nba251522.github.io/thomas-er-porfolio/)

## Credits

This project was developed with guidance from:
  - [idb Documentation](https://www.npmjs.com/package/idb)
  - [Webpack Documentation](https://webpack.js.org/concepts/)
  - [Workbox Documentation](https://developers.google.com/web/tools/workbox)
  - [Heroku Deployment Guide](https://devcenter.heroku.com/articles/getting-started-with-nodejs)

## License

This project is licensed under the terms of the MIT License.