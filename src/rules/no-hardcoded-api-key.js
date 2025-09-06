const MESSAGE_ID = "noHardcodedApiKey";

export default {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow hardcoded API keys in code.",
      recommended: false
    },
    messages: {
      [MESSAGE_ID]: "Avoid hardcoding API keys. Use environment variables or secure config."
    },
    schema: []
  },

  create(context) {
    function checkNode(node, value) {
      if (typeof value !== "string") return;

      if (value.match(/api[_-]?key/i)) {
        context.report({ node, messageId: MESSAGE_ID });
      }
    }

    return {
      Literal(node) { checkNode(node, node.value); },
      TemplateElement(node) { checkNode(node, node.value.raw); },
      Identifier(node) { checkNode(node, node.name); }
    };
  }
};
