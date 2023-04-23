# REST API using Node.js, Express, and TypeScript

Sample REST API developed using Node.js, Express, and TypeScript.

## Requirements

- [Volta](https://volta.sh/)
- [MySQL](https://www.mysql.com/)

Node.js is required to run this application. Please install Volta to automatically use the suitable Node.js version.

## Recommended

- [Visual Studio Code](https://code.visualstudio.com/)

The recommended extensions for Visual Studio Code are listed in [.vscode/extensions.json](.vscode/extensions.json).

## Getting Started

- Clone this repository.

```
git clone https://github.com/kwn1125/node-express-typescript-rest-api.git <project_directory>
```

- Install dependencies.

```
cd <project_directory>
npm install
```

- Rename `.env.sample` to `.env` and update the values.
- Apply the migration to your database.

```
npm run prisma:deploy
```

- Generate Prisma Client.

```
npm run prisma:generate
```

- Launch the application.

```
npm start
```
