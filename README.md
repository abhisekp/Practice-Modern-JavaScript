# Practice Modern JavaScript
A boilerplate to setup and practice Modern JavaScript  

![](http://i.imgur.com/Qr7xgwa.png)  
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors) [![MIT License](https://img.shields.io/badge/License-MIT-56A902.svg?style=flat-square&maxAge=2592000)](LICENSE)  [![Practice Modern JavaScript Downloads](https://img.shields.io/github/downloads/abhisekp/Practice-Modern-JavaScript/total.svg?maxAge=2592000)](https://github.com/abhisekp/Practice-Modern-JavaScript/archive/master.zip)

## Installation

> Use the latest [**NodeJS**](http://nodejs.org) (>= v6) available

1. **Install `nodemon`** globally for watching for file changes while running the code :beginner: :package:

  ```sh
  $ npm install -g nodemon # npm i -g nodemon
  ```

2. **Install all dependencies** :beginner: :package:

  ```sh
  $ npm install
  ```

## Usage

1. **Start watching** for file changes :eyes:

  ```sh
  $ npm run watch # npm start
  ```

2. **Start writing** modern JavaScript in **`index.js`** file :memo:

  ```js
  // my-module.js
  export const name = 'My Module'
  ```

  ```js
  // index.js
  import * as myModule from './my-module'

  console.log(myModule.name) // 'My Module'
  ```

3. **Enjoy** the output :joy:

  ```sh
  $ npm -s start # silently start
  My Module
  ```

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [![Abhisek Pattnaik](https://avatars.githubusercontent.com/u/1029200?v=3&s=100)<br /><sub>Abhisek Pattnaik</sub>](http://about.me/abhisekp)<br />[💻](https://github.com/abhisekp/Practice-Modern-JavaScript/commits?author=abhisekp) 🎨 [📖](https://github.com/abhisekp/Practice-Modern-JavaScript/commits?author=abhisekp) 💡 |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

> **All types of Contributions are Welcome** :pray:

## License

[**MIT**](LICENSE) © [**Abhisek Patnaik**](https://github.com/abhisekp)
