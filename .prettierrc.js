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
