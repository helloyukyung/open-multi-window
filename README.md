# open-multi-window

`open-multi-window` is a simple JavaScript library that helps you open and manage multiple popup windows simultaneously on a web page.

## Installation

To use this library, you can install it as follows:

```
npm install open-multi-window
```

Or

```
yarn add open-multi-window
```

## Usage

#### Import the module

Import the module to use it in your project.

```js
const openMultiWindow = require("open-multi-window");
```

Or

```js
import openMultiWindow from "open-multi-window";
```

#### Function call

You can open multiple popup windows by calling the openMultiWindow function. This function returns a Promise and, upon successful opening of all popup windows, returns an array of opened windows. In case of failure, it returns an error.

```js
const windows = [
  { url: "https://google.com", name: "google" },
  { url: "https://github.com", name: "github" },
  { url: "https://npmjs.com", name: "npm" },
];

const options = {
  width: 800,
  height: 600,
};

openMultiWindow(windows, options)
  .then((openedWindows) => {
    console.log("Successfully opened windows:", openedWindows);
  })
  .catch((error) => {
    console.error("Failed to open popup windows:", error);
  });
```

## Options

The openMultiWindow function can accept options as its second parameter. These options are useful for specifying window properties when opening popup windows, typically defining attributes such as width, height, position, and others.

Example options object:

```js
const options = {
  width: 800,
  height: 600,
  left: 100,
  top: 100,
  // Other properties...
};
```

## License

This library is distributed under the MIT License.

## Contributions

If you're interested in contributing to this project, feel free to open issues or send pull requests. Contributions are always welcome!
