import { RuleTester } from "eslint";
import rule from "../src/rules/no-inline-secret.js";

const tester = new RuleTester({
  languageOptions: { ecmaVersion: 2022, sourceType: "module" }
});

tester.run("fn-securecode/no-inline-secret", rule, {
  valid: [
    "const secret = process.env.SECRET;",
    "function setToken(t) { return t; }"
  ],
  invalid: [
    { code: "const secret = '12345';", errors: [{ messageId: "noInlineSecret" }] },
    { code: "const token = `abcdef`;", errors: [{ messageId: "noInlineSecret" }] },
    { code: "const password = 'mypassword';", errors: [{ messageId: "noInlineSecret" }] }
  ]
});
