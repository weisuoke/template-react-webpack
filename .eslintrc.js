module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 13,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "import",
    "jsx-a11y",
    "react-hooks",
    "sort-destructure-keys",
    "prettier"
  ],
  "rules": {
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": ["warn", { "aspects": ["invalidHref"] }],
    "jsx-a11y/click-events-have-key-events": "warn",
    "jsx-a11y/no-static-element-interactions": "warn",
    "jsx-a11y/interactive-supports-focus": "warn",
    "arrow-parens": "off",
    "class-methods-use-this": "off",
    "react/state-in-constructor": "off",
    "react/forbid-prop-types": "warn",
    "react/jsx-filename-extension": "off",
    "react/prefer-stateless-function": "warn",
    "react/jsx-closing-tag-location": "warn",
    "react/jsx-closing-bracket-location": "warn",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-wrap-multilines": "off",
    "react/require-default-props": "warn",
    "react/destructuring-assignment": "off",
    "max-classes-per-file": "off",
    "no-debugger": "off",
    "no-unused-vars": "warn",
    "no-unused-expressions": ["warn", { "allowTernary": true }],
    "operator-linebreak": "off",
    "import/prefer-default-export": "warn",
    "max-len": ["warn", { "code": 120 }],
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "off", // Checks effect dependencies
    "react/no-access-state-in-setstate": "off",
    "no-mixed-spaces-and-tabs": "error",
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "semi": ["error", "always"],
    "react/sort-comp": "warn",
    "radix": 0, // We don't have a case in production to handle hex or oct numbers
    "camelcase": ["off", {"properties": "never"}], // disables warnings of snake_case
    "prefer-destructuring": [
      "error",
      {
        "VariableDeclarator": {
          "array": false,
          "object": true
        },
        "AssignmentExpression": {
          "array": false,
          "object": false
        }
      },
      {
        "enforceForRenamedProperties": false
      }
    ],
    "import/no-cycle": ["error", { "maxDepth": "∞" }],
    "no-param-reassign": [
      "error",
      {
        "props": true,
        "ignorePropertyModificationsFor": [
          "forEach",
          "acc", // for reduce accumulators
          "accumulator", // for reduce accumulators
          "e", // for e.returnvalue
          "ctx", // for Koa routing
          "req", // for Express requests
          "request", // for Express requests
          "res", // for Express responses
          "response", // for Express responses
          "$scope", // for Angular 1 scopes
          "staticContext" // for ReactRouter context
        ]
      }
    ],
    "no-multi-assign": "warn",
    "react/no-array-index-key": "warn",
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }], // allow ++/-- in for loop
    "consistent-return": "warn",
    "no-underscore-dangle": "warn",
    "react/jsx-sort-props": ["error", {
      "callbacksLast": true,
      "shorthandFirst": true,
      "shorthandLast": false,
      "ignoreCase": true,
      "noSortAlphabetically": false,
      "reservedFirst": true
    }],
    "react/sort-prop-types": ["error", {
      "callbacksLast": true,
      "ignoreCase": false,
      "requiredFirst": false,
      "sortShapeProp": true,
      "noSortAlphabetically": false
    }],
    "react/jsx-sort-default-props": ["error", {
      "ignoreCase": true
    }],
    "sort-destructure-keys/sort-destructure-keys": ["error", {"caseSensitive": false}]
  },
};
