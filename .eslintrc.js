module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  plugins: ["import", "unused-imports"],
  rules: {
    "no-unused-vars": ["warn"],
    "unused-imports/no-unused-imports": "warn",
    "import/no-unused-modules": [1, { unusedExports: true }],
    "no-console": "warn",
  },
};
