# Bolt ⚡️ with Prisma in TypeScript

A starter template for building Slack apps using Bolt with Prisma in TypeScript

### Tech Stack
- [Bolt](https://api.slack.com/bolt) v3.12
- [Prisma](https://www.prisma.io/) v4.8
- [TypeScript](https://www.typescriptlang.org/) v4.9

[<img src="https://ik.imagekit.io/iutsav/fork-on-codesandbox__e0mFWzr1.png?updatedAt=1641916982302" width="200"/>](https://githubbox.com/utsavdotpro/starter-bolt-prisma-ts)

---

## How to Reuse Locally?

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

## Deploy
Bolt is basically a NodeJS app and so can be easily hosted on platforms like [Heroku](heroku.com).  

**Deploy for free on [Render](https://render.com)**  