module.exports = {
  root: true,

  env: {
    es6: true,
    node: true,
    browser: true,
  },

  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    jsx: true,
    useJSXTextNode: true,
  },

  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint-config-prettier",
    "plugin:react/recommended",
  ],

  plugins: ["@typescript-eslint", "prettier", "react"],

  rules: {
    "prettier/prettier": "error",
    "no-implicit-coercion": "error",
    "no-undef": "off",
    "no-var": "error",
    "react/prop-types": "off",
  },
};
