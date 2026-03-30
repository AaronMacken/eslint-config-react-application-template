# @aaronmacken/eslint-config-react-application-template

Shared ESLint config for React + TypeScript apps.

## Installation

Install from GitHub Packages:

```bash
npm install -D @aaronmacken/eslint-config-react-application-template@1.0.0
```

## Usage

In your app's `.eslintrc.js`:

```js
module.exports = {
  extends: ['@aaronmacken/react-application-template'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  overrides: [
    {
      files: ['webpack.**.js', 'paths.js', 'jest.config.js', 'jest.setup.ts'],
      parserOptions: { project: null },
    },
  ],
};
```

## npm Registry Setup (Consumer App)

Add to repo-level `.npmrc`:

```ini
@aaronmacken:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_PACKAGES_AUTH_TOKEN}
always-auth=true
```

Set environment variable on each machine:

- `GITHUB_PACKAGES_AUTH_TOKEN=<your_github_pat>`

Required token scopes:

- `read:packages`
- `write:packages`
- `repo` (if repository/package is private)

## Releasing a New Version

1. Make changes to `index.js`
2. Bump `version` in `package.json`
3. Commit: `git add . && git commit -m "chore: describe change"`
4. Tag: `git tag -a v1.0.1 -m "release v1.0.1"`
5. Push: `git push origin master --follow-tags`
6. Publish: `npm publish`

## Consuming an Update in an App

```bash
npm install -D @aaronmacken/eslint-config-react-application-template@1.0.1
```
