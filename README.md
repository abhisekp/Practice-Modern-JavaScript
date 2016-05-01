<a name="app-top" id="app-top"></a>
# Practice Modern JavaScript
A boilerplate to setup and practice Modern JavaScript  

[![](http://i.imgur.com/rzyanJt.gif)](#app-top)  

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors) [![MIT License](https://img.shields.io/badge/License-MIT-56A902.svg?style=flat-square&maxAge=2592000)](LICENSE)  [![Practice Modern JavaScript Downloads](https://img.shields.io/github/downloads/abhisekp/Practice-Modern-JavaScript/total.svg?maxAge=2592000)](https://github.com/abhisekp/Practice-Modern-JavaScript/archive/master.zip)

## <a id="toc"></a> Table of Contents
- [Requirements](#req)
- [Installation Instructions](#install)
- [How to Use](#usage)
- [Examples](#examples)
 - [Example 1](#example-1)
 - [Example 2](#example-2)
- [Technologies Used](#techs)
- [Help & Support](#help)
- [Contributors](#contrib)
- [License](#license)
- [Contact](#contact)

## <a id="req"></a>Requirements <a href="#toc" title="Table of Contents"><kbd>⮭</kbd></a>

- Latest [**NodeJS**](http://nodejs.org) (>= v6)

## <a id="install"></a>Installation <a href="#toc" title="Table of Contents"><kbd>⮭</kbd></a>


1. **Install `nodemon`** globally for watching for file changes while running the code :beginner: :package:

  ```sh
  $ npm install -g nodemon # npm i -g nodemon
  ```

2. **Install all dependencies** :beginner: :package:

  ```sh
  $ npm install
  ```

## <a id="usage"></a>Usage <a href="#toc" title="Table of Contents"><kbd>⮭</kbd></a>

1. <a id="watch"></a>**Start watching** for file changes :eyes:

  ```sh
  $ npm run watch # npm start
  ```

2. <a id="write"></a>**Start writing** modern JavaScript in **`index.js`** file :memo:

  ```js
  // my-module.js
  export const name = 'My Module'
  ```

  ```js
  // index.js
  import * as myModule from './my-module'

  console.log(myModule.name) // 'My Module'
  ```

3. <a id="output"></a>**Enjoy** the output :joy:

  ```sh
  $ npm start -s # silently start
  My Module
  ```

## <a id="examples"></a>Examples

### <a id="example-1"></a>Example 1 <a href="#toc" title="Table of Contents"><kbd>⮭</kbd></a>

```js
// async-await.js
const prom = new Promise(resolve => {
  resolve(`Hello`)
})

const longRun = async () => {
  const res = await prom
  console.log(res)
}

longRun()
```

### <a id="example-2"></a>Example 2 <a href="#toc" title="Table of Contents"><kbd>⮭</kbd></a>
```js
// array-includes.js
const includes3 = [1, 3, 4].includes(3)
console.log(includes3)
```

## <a id="techs"></a>Technologies Used <a href="#toc" title="Table of Contents"><kbd>⮭</kbd></a>
- [**Babel**](http://babeljs.io) — Transpiles modern JS to compatible and runnable JS
- [**babel-preset-modern-node**](https://github.com/michaelcontento/babel-preset-modern-node) — A preset for Babel with required plugins


## <a id="help"></a>Help & Support <a href="#toc" title="Table of Contents"><kbd>⮭</kbd></a>
- [**BabelJS**](https://babeljs.slack.com) — BabelJS Slack Chat Room
- [**FreeCodeCamp/FreeCodeCamp**](https://gitter.im/FreeCodeCamp/FreeCodeCamp) — FreeCodeCamp Gitter Chat Room
- [**nodejs/node**](https://gitter.im/nodejs/node) — NodeJS Gitter Chat Room


## <a id="contrib"></a>Contributors <a href="#toc" title="Table of Contents"><kbd>⮭</kbd></a>

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [![Abhisek Pattnaik](https://avatars.githubusercontent.com/u/1029200?v=3&s=100)<br /><sub>Abhisek Pattnaik</sub>](http://about.me/abhisekp)<br />[💻](https://github.com/abhisekp/Practice-Modern-JavaScript/commits?author=abhisekp) 🎨 [📖](https://github.com/abhisekp/Practice-Modern-JavaScript/commits?author=abhisekp) 💡 |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->
This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors#emoji-key) specification.

> **All types of Contributions are Welcome** :pray:

## <a id="license"></a>License <a href="#toc" title="Table of Contents"><kbd>⮭</kbd></a>

[**MIT**](LICENSE) © [**Abhisek Patnaik**](https://github.com/abhisekp)

> ----
<a id="contact"></a>
<p align="center">
Tweet <kbd><a href="https://twitter.com/abhisek"><b><img src="https://i.imgur.com/wOPZd0Y.png?1"> @abhisek</b></a></kbd><br>
Know <kbd><b><a href="https://about.me/abhisekp">about/abhisekp</a></b></kbd><br>
Chat with <kbd><a href="https://gitter.im/abhisekp">
<img src="https://i.imgur.com/ThSWa6Y.png?2"> <b>@abhisekp</b></a></kbd>
</p>

> ----

<div align="right">
 <a href="#toc" title="Table of Contents"><kbd><b>Table of Contents ⮭</b></kbd></a><br>
 <a href="#app-top"><kbd><b>back to top ⮭</b></kbd></a>
</div>
