# bc-gng-prototype

This package is a prototype re-design of [gov.bc.ca](https://www2.gov.bc.ca/). It is a React front-end application served by an Node.js back-end.

## File Structure
- `./server.js` is a Node/Express server that serves the React production build
- `./react-app/` holds the React front-end

## Installation
The current version of Node.js required for the project is described in `.nvmrc`. The Node.js version is also pinned in the `engines` section of `package.json` and `./react-app/package.json`.

1. `npm i` to install the Express server dependencies.
2. Create an environment variable file (`.env`) in the root folder following the example in `.env.example`.
3. To give yourself credentials to develop with, add a `USER_PASS_PAIRS` environment variable in `.env`:
```
USER_PASS_PAIRS=username|password,seconduser|secondpassword
```

## Build
`npm run build` within the parent directory creates a production build of the React application after installing front-end dependencies.

## Run
`npm run dev` to start the Express server with Nodemon for logging in development.

`npm run start` to start the Express server without Nodemon for production deployments.
