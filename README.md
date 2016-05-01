# Practice Modern JavaScript
A boilerplate to setup and practice Modern JavaScript

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
