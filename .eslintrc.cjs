/** @type {import("eslint").Linter.Config} */
const config = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    // @see https://github.com/expo/expo/tree/main/packages/eslint-config-expo
    "expo",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
  ],
  rules: {
    // @see https://typescript-eslint.io/rules/array-type
    "@typescript-eslint/array-type": "off",

    // @see https://typescript-eslint.io/rules/consistent-type-definitions/
    "@typescript-eslint/consistent-type-definitions": "off",

    // @see https://typescript-eslint.io/rules/consistent-type-imports/
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],

    // @see https://typescript-eslint.io/rules/no-unused-vars/
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],

    // @see https://typescript-eslint.io/rules/require-await/
    "@typescript-eslint/require-await": "off",

    // @see https://typescript-eslint.io/rules/no-misused-promises/
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: { attributes: false },
      },
    ],
  },
};

module.exports = config;