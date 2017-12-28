module.exports = {
  "env": {
    "es6": true,
    "node": true,
  },
  "extends": [
    "airbnb-base",
    "eslint:recommended",
    "plugin:flowtype/recommended",
    "prettier",
    "prettier/flowtype"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      generators: true,
    },
  },
  "plugins": [
    "eslint-comments",
    "flowtype",
    "flowtype-errors",
    "fp",
    "prettier",
    "promise",
  ],
  "rules": {
    "arrow-body-style": ["error", "as-needed"],
    "eslint-comments/disable-enable-pair": "error",
    "eslint-comments/no-duplicate-disable": "error",
    "eslint-comments/no-unlimited-disable": "error",
    "eslint-comments/no-unused-disable": "error",
    "eslint-comments/no-unused-enable": "error",
    "flowtype/no-primitive-constructor-types": "error",
    "flowtype/no-weak-types": "error",
    "flowtype/require-parameter-type": [
      "error",
      {
        "excludeArrowFunctions": "expressionsOnly",
        "excludeParameterMatch": "^_"
      }
    ],
    "flowtype/require-return-type": [
      "error",
      "always",
      {
        "excludeArrowFunctions": "expressionsOnly"
      }
    ],
    "flowtype/require-valid-file-annotation": [
      "error",
      "always",
      {
        "annotationStyle": "line"
      }
    ],
    "flowtype/sort-keys": [
      "error",
      "asc", {
        "natural": true
      }
    ],
    "flowtype/type-id-match": ["error", "^\\$?([A-Z][a-z0-9]*)+Type$"],
    "flowtype-errors/show-errors": "error",
    "fp/no-arguments": "error",
    "fp/no-class": "error",
    "fp/no-delete": "error",
    "fp/no-events": "error",
    "fp/no-get-set": "error",
    "fp/no-let": "error",
    "fp/no-loops": "error",
    "fp/no-mutating-assign": "error",
    "fp/no-mutating-methods": [
      "error",
      {
        "allowedObjects": ["R"]
      }
    ],
    "fp/no-mutation": [
      "error",
      {
        "commonjs": true,
        "exceptions": [
          {
            "property": "defaultProps"
          },
          {
            "property": "displayName"
          },
          {
            "property": "propTypes"
          },
        ]
      }
    ],
    "fp/no-nil": "error",
    "fp/no-proxy": "error",
    "fp/no-rest-parameters": "error",
    "fp/no-this": "error",
    "fp/no-throw": "error",
    "fp/no-valueof-field": "error",
    "import/named": "error",
    "import/no-commonjs": "error",
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": true
      }
    ],
    "import/order": [
      "error",
      {
        "newlines-between": "always"
      }
    ],
    "import/prefer-default-export": 0,
    "no-underscore-dangle": [
      0
    ],
    "no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_$",
        "ignoreRestSiblings": true
      }
    ],
    "no-var": "error",
    "prefer-const": "error",
    "prettier/prettier": [
      "error",
      {
        "bracketSpacing": true,
        "parser": "flow",
        "singleQuote": true,
        "trailingComma": "es5"
      }
    ],
    "promise/always-return": "error",
    "promise/avoid-new": "error",
    "promise/catch-or-return": "error",
    "promise/no-nesting": "error",
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",
    "radix": "error",
    "sort-keys": [
      "error",
      "asc",
      {
        "natural": true
      }
    ]
  }
}
