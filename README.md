# Electron and webpack boilerplate.

Sample project using Electron Forge + webpack + React + React Router + Ant Design + Recharts + Sass and Less.

## Screenshot

![Screenshot](https://raw.githubusercontent.com/douglasjunior/electron-webpack-react-boilerplate/master/screenshot/screen.png)

## Tecnologies included:

- [Electron Forge](https://electronforge.io/)
    - The command line interface for ambitious Electron applications.
- [webpack](https://webpack.js.org/)
    - A bundler for javascript and friends.
- [React JS](https://reactjs.org/)
    - A JavaScript library for building user interfaces.
- [React Router](https://reacttraining.com/react-router/)
    - Declarative routing for React.
- [Ant Design](https://ant.design/)
    - A design system with values of Nature and Determinacy for better user experience of enterprise applications.
- [Recharts](http://recharts.org/)
    - A composable charting library built on React components.

## Usage

```bash
$ git clone https://github.com/douglasjunior/electron-webpack-react-boilerplate.git
$ cd electron-webpack-react-boilerplate
$ npm install
```

## Scripts:

Start development mode:
```bash
$ npm start
```

Create package for the current platform:
```bash
$ npm run build
```

Build for Mac OSX: (only works on Mac)
```bash
$ npm run make:mac
```

Build for Linux (deb and dpkg): (works on Linux or Mac)
```bash
$ npm run make:linux
```

Build for Windows: (only works on Windows)
```bash
$ npm run make:windows
```

_For a complete list of *Electron Forge* options, visit the [official docs](https://github.com/electron-userland/electron-forge#usage)_

## License

MIT License

Copyright (c) 2018 Douglas Nassif Roma Junior
