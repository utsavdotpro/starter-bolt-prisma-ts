[<img src="https://ik.imagekit.io/iutsav/fork_l0RKONb5l.svg" height="30" />](https://githubbox.com/utsavdotpro/starter-bolt-prisma-ts)

# Bolt ⚡️ with Prisma in TypeScript

A starter template for building Slack apps using Bolt with Prisma in TypeScript

### Tech Stack
- [Bolt](https://api.slack.com/bolt) v3.12
- [Prisma](https://www.prisma.io/) v4.8
- [TypeScript](https://www.typescriptlang.org/) v4.9

---

## Using the template locally

Use `degit` to download the repository locally.

> ### ❓ What is [degit](https://github.com/Rich-Harris/degit)?
> degit downloads a copy of git repository with downloading its entire git history.

Install degit globally.

````bash
npm install -g degit
````

Download the latest version
````bash
degit utsavdotpro/starter-bolt-prisma-ts
````

---

## Getting Started

### Bolt app

Run locally
````bash
yarn dev
````

Build app
````bash
yarn build
````

Run build version
````bash
yarn start
````

### Real-time Dev Testing

After you've started the Bolt app using any of the commands above, run the following to expose your local server to the world.

```bash
yarn serve
```

You will receive a url, for example https://random-words.loca.lt, that you can use directly on Slack. Made possible using [localtunnel](https://github.com/localtunnel/localtunnel)

> Update the port in [package.json](package.json) for the `serve` script if you want to use anything other than `3000` for the Bolt app

### Express app

> Bolt doesn't require a separate Express app but it's good to have to quickly test your APIs locally

Run locally

````bash
yarn dev:express
````

### Prisma

````bash
yarn migrate:dev # migrate to dev
yarn migrate:reset # reset DB
yarn migrate:deploy # deploy migrations
yarn prisma:studio # start DB interface
yarn prisma:generate # generate prisma modals
yarn prisma:generate:watch # generate prisma modals on change
````

## Project Structure
```
project
|-- prisma                    ℹ️ schema and migrations
|-- src
|   |-- listeners             ℹ️ listeners for different event types
|   |   |-- actions
|   |   |-- events
|   |   |-- shortcuts
|   |   |-- views
|   |-- models
|   |-- ui
|   |   |-- modals            ℹ️ keep your modal UIs
|   |   |                     ℹ️ keep your UI functions
|   |-- utils
|   |   |-- constants         ℹ️ keep your constants
|   |   |                     ℹ️ keep your util functions
```

## Deployment
Bolt is basically a NodeJS app and so can be easily hosted on platforms like [Heroku](heroku.com).  

**Deploy for free on [Render](https://render.com)**  

## Quick Tips

- Add the following script in your `package.json` file to automatically generate your Prisma models on every install
  ```json
  "scripts": {
    "postinstall": "npm run prisma:generate"
  }
  ```