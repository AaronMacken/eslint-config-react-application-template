# eslint-config-react-application-template

Shared ESLint config for React + TypeScript apps.

## Installation

Install the package pinned to a specific release tag:

```bash
npm install -D eslint-config-react-application-template@git+https://github.com/AaronMacken/eslint-config-react-application-template#v1.0.0
```

## Usage

In your app's `.eslintrc.js`:

```js
module.exports = {
  extends: ['react-application-template'],
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

## Releasing a new version

1. Make changes to `index.js`
2. Bump `version` in `package.json`
3. Commit: `git add . && git commit -m "chore: describe change"`
4. Tag: `git tag -a v1.0.1 -m "release v1.0.1"`
5. Push: `git push origin master --follow-tags`

## Consuming the update in an app

```bash
npm install -D eslint-config-react-application-template@git+https://github.com/AaronMacken/eslint-config-react-application-template#v1.0.1
```
