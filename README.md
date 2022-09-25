# VSCODE-PRETTIER-SETUP

## STEP 1

- You will need an existing or new project to use Prettier

- To learn Prettier with a dummy project, create an `example-code` directory with the following file extensions ie:

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

- Create `.vscode` directory at the root of your project with a file called `settings.json` with the following contents ie:

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

- Customize Prettier behavior via the `.prettierrc.js` file at the root of your project with the following contents ie:

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


## ENJOY USING PRETTIER!
