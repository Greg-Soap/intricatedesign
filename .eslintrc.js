/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint-config-prettier",
    "eslint:recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["prettier"],
  rules: {
    "prefer-arrow-callback": ["warn", { allowNamedFunctions: true }],
    // "linebreak-style": ["warn", "unix"],
    "no-unused-vars": "warn",
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "react/react-in-jsx-scope": "error",
    "react/jsx-key": "warn",
    "react/self-closing-comp": ["warn", { component: true, html: true }],
    "prettier/prettier": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
