import { RuleTester } from "eslint";
import rule from "../src/rules/no-hardcoded-api-key.js";

const tester = new RuleTester({
  languageOptions: { ecmaVersion: 2022, sourceType: "module" }
});

tester.run("fn-securecode/no-hardcoded-api-key", rule, {
  valid: [
    "const key = process.env.API_KEY;",
    "function setKey(k) { return k; }"
  ],
  invalid: [
    { code: "const API_KEY = '12345';", errors: [{ messageId: "noHardcodedApiKey" }] },
    { code: "const apiKey = `12345`;", errors: [{ messageId: "noHardcodedApiKey" }] }
  ]
});
