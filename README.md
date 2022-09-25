# VSCODE-PRETTIER-SETUP

## STEP 1

- You will need an existing or new project to use Prettier

- To learn Prettier with a dummy project, add an `example-code` directory with the following file extensions ie:

```
example-code
 ┣ test.css
 ┣ test.js
 ┣ test.ts
 ┗ test.tsx
```

## STEP 2

- Install Prettier VSCode extension
    * via the GUI -> Search for the "Prettier" extension in the Extensions Tab in VSCode
    * via the CLI ->  `code --install-extension esbenp.prettier-vscode`

- Integrate project with Prettier extension and VSCode via `.vscode` config directory

- Create `.vscode` directory with a file called `settings.json` with the following contents ie:

```
{
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
    },
    "[typescriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[css]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "editor.formatOnSave": true
}
```

- Your project should now look like this:

```
.vscode
 ┣ settings.json
example-code
 ┣ test.css
 ┣ test.js
 ┣ test.ts
 ┗ test.tsx
```

## STEP 3

- Customize Prettier behavior via the `.prettierrc.js` file at root with the following contents ie:

- note difference between Prettier and ESLint

```
module.exports = {
  overrides: [
    {
      files: "*.js",
      options: {
        semi: false,
        trailingComma: "es5",
        singleQuote: true,
      },
    },
    {
      files: ["*.css"],
      options: {
        tabWidth: 4,
      },
    },
  ],
};
```

- Your project should now look like this:

```
.vscode
 ┣ settings.json
example-code
 ┣ test.css
 ┣ test.js
 ┣ test.ts
 ┗ test.tsx
.prettierrc.js
```

- Reference Links ie:
    * https://prettier.io/docs/en/configuration.html#configuration-schema
    * https://prettier.io/docs/en/configuration.html#basic-configuration
    * https://prettier.io/docs/en/index.html

## TAKE IT FURTHER

- Next steps for more advanced formatting tools would be ESLint
    * https://eslint.org/

- The configurability of Prettier is limited but this is a feature for this tool aka Prettier is opinionated

- Prettier vs. ESLint
    * https://github.com/prettier/prettier
    * https://github.com/eslint/eslint
