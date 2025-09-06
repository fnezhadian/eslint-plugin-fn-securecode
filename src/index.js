import noPassword from "./rules/no-password.js";
import noHardcodedApiKey from "./rules/no-hardcoded-api-key.js";


export default {
  rules: {
    "no-password": noPassword,
    "no-hardcoded-api-key": noHardcodedApiKey
  }
};
