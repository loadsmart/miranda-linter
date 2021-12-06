# miranda-linter

The purpose is to ensure Miranda design system is adopted in a standardized way instead of using pure HTML elements

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `@loadsmart/eslint-config-miranda-linter`:

```sh
npm install @loadsmart/eslint-config-miranda-linter --save-dev
```

## Usage

Add `@loadsmart/eslint-config-miranda-linter` to the extends section of your `.eslintrc` configuration file. You can omit the `eslint-config-` prefix:

```json
{
    "extends": [
        "@loadsmart/eslint-config-miranda-linter"
    ]
}
```



