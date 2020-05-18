module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
    "prettier/react",
    "prettier/standard",
  ],
  rules: {
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "import/prefer-default-export": "off",
    "react/jsx-props-no-spreading": "off",
    // NextJs does not require you to import React into each component. so suppress errors for missing 'import React' in files.
    "react/react-in-jsx-scope": "off",
    "react/display-name": 1,
    "prettier/prettier": ["error", { semi: false }],
  },
  settings: {
    "import/resolver": {
      "babel-module": {},
    },
    react: {
      version: "detect",
    },
  },
  globals: {
    // NextJs does not require you to import React into each component. so suppress errors for missing 'import React' in files.
    React: "writable",
  },
}
