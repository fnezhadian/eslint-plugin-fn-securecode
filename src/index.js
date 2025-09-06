import noPassword from "./rules/no-password.js";
import noHardcodedApiKey from "./rules/no-hardcoded-api-key.js";
import noInlineSecret from "./rules/no-inline-secret.js";


export default {
  rules: {
    "no-password": noPassword,
    "no-hardcoded-api-key": noHardcodedApiKey,
    "no-inline-secret": noInlineSecret
  }
};
