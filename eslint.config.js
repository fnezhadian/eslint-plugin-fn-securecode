import plugin from "./src/index.js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: { ecmaVersion: 2022, sourceType: "module" },
    plugins: { "fn-securecode": plugin },
    rules: {
      "fn-securecode/no-password": "warn",
      "fn-securecode/no-hardcoded-api-key": "warn"
    }
  }
];
