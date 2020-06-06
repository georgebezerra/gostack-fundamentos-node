[![Known Vulnerabilities](https://snyk.io/test/github/georgebezerra/gostack-fundamentos-node/badge.svg?targetFile=package.json)](https://snyk.io/test/github/georgebezerra/gostack-fundamentos-node?targetFile=package.json)
[![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)


# gostack-fundamentos-node
This project is my implementation of the Financial Transactions app which is the challenger project for the Rocketseat GoStak 2020.

This repository uses API Blueprint to generate API documentation. You can find the documentation [here](https://georgebezerra.github.io/gostack-fundamentos-node/).

## TypeScript Features
- OOP
- Interface

---

## Principles
- Separation of Concerns (SoC)
- Don't Repeat Yourself (DRY)
- Single Responsability Principle (SRP)
- Dependendy Inversion Principle (DIP)

---

## Dependencies:

Packages  | Version
--------- | ------
[TS-node-dev](https://github.com/whitecolor/ts-node-dev/blob/master/README.md) | [npm version *1.0*](https://www.npmjs.com/package/ts-node-dev)
[Date-fns](https://github.com/date-fns/date-fns/blob/master/README.md) | [npm version *2.14*](https://www.npmjs.com/package/date-fns)
[Eslint](https://github.com/eslint/eslint/blob/master/README.md) | [![npm version](https://camo.githubusercontent.com/ec546fef99e14a0e87f14c716e1a7db8bec6f528/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f65736c696e742e737667)](https://www.npmjs.com/package/eslint)
[UUIdv4](https://github.com/thenativeweb/uuidv4/blob/master/README.md) | [![npm version](https://camo.githubusercontent.com/640f81262cf34599a4d1fc45b3f17f7beeb25b72/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f757569647634)](https://www.npmjs.com/package/uuidv4)
[Prettier](https://github.com/prettier/prettier/blob/master/README.md) | [![npm version](https://camo.githubusercontent.com/a4821b9b033f25634cab2686be36d84c606e25dd/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f70726574746965722e7376673f7374796c653d666c61742d737175617265)](https://www.npmjs.com/package/prettier)
[Express](https://github.com/expressjs/express/blob/master/Readme.md) | [![npm version](https://camo.githubusercontent.com/c031efcc66c1bfc646f4369604955b26f3e1dbcb/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f657870726573732e737667)](https://www.npmjs.com/package/express)
[TypeScript](https://github.com/microsoft/TypeScript/blob/master/README.md) | [![npm version](https://camo.githubusercontent.com/020422d38770ea7d3eb37b8d8164001ba197b779/68747470733a2f2f62616467652e667572792e696f2f6a732f747970657363726970742e737667)](https://www.npmjs.com/package/typescript)
[Jest](https://github.com/facebook/jest/blob/master/README.md) | [![npm version](https://camo.githubusercontent.com/d231c42e928e671a80783fd28be8a6d6d4d70ea4/68747470733a2f2f62616467652e667572792e696f2f6a732f6a6573742e737667)](https://www.npmjs.com/package/jest)

---

## Prerequisites

### NodeJs

- [Download](https://nodejs.org/en/download/)

```bash
node --version
```

### Yarn

```
npm install -g yarn

yarn -version
```

### TypeScript
```
npm install -g typescript

tsc --version
```

---

## Getting Started

Clone the repo and use `yarn` to install dependecies

```bash
git clone https://github.com/georgebezerra/gostack-fundamentos-node
cd gostack-fudamentos-node
yarn install
```

Start server

```
yarn dev:server
```

The visit `http://localhost:3333/transactions` for example.

**Test**

```
# Run tests
yarn test
```

**Deployment**
```
yarn build
```

---

## API Endpoint

TRANSACTIONS

- `POST api/transactions` - Add a new transaction
- `GET  api/transactions` - Get all of the transactions

---

## Licence

This project is open-source software licensed under the [GNU General Public License v3.0](https://github.com/georgebezerra/gostack-fundamentos-node/blob/master/LICENSE)

---

Development by

Developer / Author: George Bezerra


https://github.com/georgebezerra
