# Practice Modern JavaScript
A boilerplate to setup and practice Modern JavaScript  
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

## How to Use

1. Install `nodemon` globally for watching for file changes while running the code :beginner: :package:

  ```sh
  $ npm install -g nodemon # npm i -g nodemon
  ```

2. Install all dependencies :beginner: :package:

  ```sh
  $ npm install
  ```

3. Start watching for file changes :eyes:

  ```sh
  $ npm run watch # npm start
  ```

4. Start writing modern JavaScript in `index.js` file :memo:

  ```js
  // my-module.js
  export const name = 'My Module'
  ```

  ```js
  // index.js
  import * as myModule from './my-module'

  console.log(myModule.name) // 'My Module'
  ```

5. Enjoy the output :joy:

  ```sh
  ▶ npm -s start
  My Module
  ```

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [![Abhisek Pattnaik](https://avatars.githubusercontent.com/u/1029200?v=3&s=100)<br /><sub>Abhisek Pattnaik</sub>](http://about.me/abhisekp)<br />[💻](https://github.com/abhisekp/Practice-Modern-JavaScript/commits?author=abhisekp) 🎨 [📖](https://github.com/abhisekp/Practice-Modern-JavaScript/commits?author=abhisekp) 💡 |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section --><!-- ALL-CONTRIBUTORS-LIST:END -->

## License

[MIT](LICENSE) &copy; Abhisek Patnaik
