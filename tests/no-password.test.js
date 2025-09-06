import { RuleTester } from "eslint";
import rule from "../src/rules/no-password.js";

const tester = new RuleTester({
  languageOptions: { ecmaVersion: 2022, sourceType: "module" }
});

tester.run("fn-securecode/no-password", rule, {
  valid: ["const username = 'Flor';", "function check(val) { return val; }"],
  invalid: [
    { code: "const password = '123';", errors: [{ messageId: "avoidPassword" }] },
    { code: "console.log(`password: ${pwd}`);", errors: [{ messageId: "avoidPassword" }] }
  ]
});
