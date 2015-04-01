# ngwp

> AngularJS-powered front-end for WordPress

__In development! The `master` branch changes frequenty and things break.__


#### Development environment

Prerequisites:

- npm, available from [Node.js](https://nodejs.org/)
- Grunt `npm install -g grunt`


To get the development server up and running, i.e. how to develop in it:

1. Ensure a build is completed via grunt: `grunt b`
2. Start the express server: `node express.js`, access it at http://localhost:8088 (default)
3. Have a local WordPress install up and running with the WP-API plugin installed propery
4. Point ngwp to your local WordPress install by setting the constant in `/src/ngwp/common/api-endpoint.js` to it's URL.


#### Current limitations

- We cannot get the number of comments on the main posts object. In the works, WP-API: https://github.com/WP-API/WP-API/pull/848


#### Plugins

1. [WP-API](https://github.com/WP-API/WP-API) - Backend API
2. [jose-api](https://github.com/Shelob9/josie-api) - Backend API helper plugin
