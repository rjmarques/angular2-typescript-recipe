# Angular 2 & Typescript Recipe

This project is aims to provide a base structure for a web project. It is not meant as a tutorial of any kind, but instead to remove initial boilderplate build definition concerns. Thus, provinding a pre-defined and robust build structure upon which multiple developers can work on to build something great!

### Installation

This project requires [Node.js](https://nodejs.org/) v4.x.x and [NPM] 3.x.x ro run:

```sh
$ node -v
$ npm -v
```

From the project's root folder run:

```sh
$ npm install
```

##### Development Build

Before starting to develop run:

```sh
$ npm start
```

This will initialize source bundling, and watch your src folder for any change you make to the source files. It will also build a continuously updated in-memory build version that can be accessed at http://localhost:8080/

You can use your favourite IDE to start coding. All your changes will be automatically reflected on the resulting app.

##### Production Build

You can also obtain a production ready build by running:

```sh
$ npm run build
```

This will place all your files in a *dist* folder. The latter's contents can be copied to your hosting server and made available to everyone. Note, the source files are minified, and source maps are not created by default.

If you don't have a hosting service, fear not! I've provided a little file called **server.js**, which is a very basic HTTP server. This server will resolve requests from the *dist* folder.

To run this http server:

```sh
$ node server.js
```

You can reach your app at http://localhost:1337/

##### Testing Build

To run your unit tests:

```sh
$ npm run test
```

### Under The Hood

As the name implies, this project is built on top of [Angular 2] and [Typescript]. Naturally, other techologies are also used: 

* [Angular 2] - The MVC framework on top of which the application is built
* [Typescript] - A Javascript super-set language
* [SASS] - CSS on steroids
* [Webpack] - An extremelly good module bundler
* [Karma] - Testing framework

These ones were picked for two main reasons: I believe they are good at what they aim to do, and I wanted to learn more about them. 

License
----

MIT
    
   [Typescript]: <https://www.typescriptlang.org/>
   [Node.js]: <https://nodejs.org>
   [NPM]: <https://www.npmjs.com/>
   [Angular 2]: <https://angular.io/>
   [Webpack]: <https://webpack.github.io/>
   [SASS]: <http://sass-lang.com/>
   [Karma]: <https://karma-runner.github.io/1.0/index.html>
