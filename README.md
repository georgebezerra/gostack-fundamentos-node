[![Known Vulnerabilities](https://snyk.io/test/github/georgebezerra/gostack-fundamentos-node/badge.svg?targetFile=package.json)](https://snyk.io/test/github/georgebezerra/gostack-fundamentos-node?targetFile=package.json)
[![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fgeorgebezerra%2Fgostack-fundamentos-node.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fgeorgebezerra%2Fgostack-fundamentos-node?ref=badge_shield)


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

- Jest *25.3*
- Eslint *6.8*
- Uuidv4 *6.1*
- Prettier *2.0*
- Express *4.17*
- Date-fns *2.14*
- Typescript *3.8*
- Ts-node-dev *1.0*

---

## Dependencies:

Packages  | Version
--------- | ------
Jest      | R$ 10
Eslint    | R$ 8
UUIdv4    | R$ 7
Prettier    | R$ 8
Express     | R$ 8
Date-fns    | R$ 8
Typescript  | R$ 8
Ts-node-dev  | R$ 8

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


[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fgeorgebezerra%2Fgostack-fundamentos-node.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fgeorgebezerra%2Fgostack-fundamentos-node?ref=badge_large)