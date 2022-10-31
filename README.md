# React & firebase Chat web Application

Move here => [Click me!](https://kimyerim1935.github.io/react-messenger)

## Techmology stack
- [React](https://ko.reactjs.org/)
- [Javascript](https://developer.mozilla.org/ko/docs/Web/JavaScript)
- [firebase](https://firebase.google.com/docs?hl=ko)

## Project Description
- This project used Firebase cli, contains these features
  * Email Auth
  * View friends list
  * Send Message & img
  * Confirm last message & last message received time
  * Profile Img exchange
- This project was distributed as gh-pages


## Project preview
<img width="1437" alt="스크린샷 2022-10-31 오후 1 32 32" src="https://user-images.githubusercontent.com/61038091/198932070-e53bf4d7-4289-4ca1-93fd-971deb43d2df.png">

- After register of your email, send the message try for your friends!

## Getting Started
- ``` npm install ``` and ``` npm start ```
- add .env file that firebase config information

## Folder construction
``` 
react-messenger
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  └─ robots.txt
├─ src
│  ├─ assets
│  │  ├─ img
│  │  │  ├─ img.jpg
│  │  ├─ svg
│  │  │  ├─ Attechment.js
│  │  │  ├─ Camera.js
│  │  │  ├─ Delete.js
│  ├─ components
│  │  ├─ Loading.js
│  │  ├─ Message.js
│  │  ├─ MessageForm.js
│  │  ├─ Navbar.js
│  │  ├─ PrivateRoute.js
│  │  ├─ User.js
│  ├─ context
│  │  ├─ auth.js
│  ├─ pages
│  │  ├─ Home.js
│  │  ├─ Login.js
│  │  ├─ Profile.js
│  │  ├─ Register.js
│  ├─ App.css
│  ├─ App.test.js
│  ├─ firebase.js
│  ├─ index.css
│  ├─ index.js
├─ .env
```
