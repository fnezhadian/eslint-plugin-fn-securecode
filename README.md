# eslint-plugin-fn-securecode

Custom ESLint rules to improve code security.

## Installation
npm install eslint-plugin-fn-securecode --save-dev

## Usage
.eslintrc.js or eslint.config.js:
{
  plugins: ["fn-securecode"],
  rules: {
    "fn-securecode/no-password": "warn"
  }
}

## Philosophy
Security should be built **from the inside out**, not just external layers.
