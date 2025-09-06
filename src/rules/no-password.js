const MESSAGE_ID = "avoidPassword";

export default {
  meta: {
    type: "problem",
    docs: {
      description: "Avoid using 'password' directly in code (use secure config/vault).",
      recommended: false
    },
    messages: { [MESSAGE_ID]: "Avoid using 'password' in code. Use a secure config or vault." },
    schema: []
  },

  create(context) {
    function reportIfContainsPassword(text, node) {
      if (typeof text !== "string") return;
      if (text.toLowerCase().includes("password")) {
        context.report({ node, messageId: MESSAGE_ID });
      }
    }

    return {
      Identifier(node) { reportIfContainsPassword(node.name, node); },
      Literal(node) { reportIfContainsPassword(node.value, node); },
      TemplateElement(node) { reportIfContainsPassword(node.value.raw, node); }
    };
  }
};
