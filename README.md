# My Favourite Holiday

**Portfolio Website** - Coding Three: Web Development Studio

## Project config

- **[yarn](https://github.com/yarnpkg/berry)** - package manager
- **[Vite](https://vitejs.dev/)** - Next Generation Frontend Tooling
- **[Tailwind](https://github.com/tailwindlabs/tailwindcss)** - A utility-first CSS framework for rapidly building custom user interfaces

## Installation

### Dependencies

#### Node

Download the latest version of Node.js from their website: https://nodejs.org/en/

#### yarn

Make sure to install this globally

```sh
npm install -g yarn
```

Install the project dependencies

```sh
yarn install
```

### Environment variables

Create a `.env.local` file at the root of this project. This file is _gitignored_ and should never be commited but it's used to provide secrets within the project. You can find the variables that are required in the `.env.dist` file.

## Running locally

To launch the server:

```sh
yarn dev
```

Go to http://localhost:3000
