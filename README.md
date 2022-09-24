# VSCODE-PRETTIER-SETUP

## STEP 1

- add .gitignore with the following file contents ie:

```
.DS_Store
```

- add `example-code` directory with the following test file extensions ie:

```
example-code
 ┣ test.css
 ┣ test.js
 ┣ test.ts
 ┗ test.tsx
```

## STEP 2

- Install Prettier VSCode extension
    * via the GUI
    * via the CLI ->  `code --install-extension esbenp.prettier-vscode`

- Integrate project with Prettier extension and VSCode via `.vscode` config directory

- Create `.vscode` direction with a file called `settings.json` with the following contents ie:

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

- TEST!
