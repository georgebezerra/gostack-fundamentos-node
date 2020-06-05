[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![Open Source](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://opensource.org/)

# gostack-fundamentos-node
This project is my implementation of the Financial Transactions app which is the challenger project for the Rocketseat GoStak 2020.

This repository uses API Blueprint to generate API documentation. You can find the documentation here.

Dependencies:

- Jest *25.3*
- Eslint *6.8*
- Uuidv4 *6.1*
- Prettier *2.0*
- Express *4.17*
- Date-fns *2.14*
- Typescript *3.8*
- Ts-node-dev *1.0*

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

## API Endpoint

TRANSACTIONS

- `POST api/transactions` - Add a new transaction
- `GET  api/transactions` - Get all of the transactions


Authors: George Bezerra

https://github.com/georgebezerra
