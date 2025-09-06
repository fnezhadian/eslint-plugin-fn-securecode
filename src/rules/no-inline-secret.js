const MESSAGE_ID = "noInlineSecret";

export default {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow inline secrets in code.",
      recommended: false
    },
    messages: {
      [MESSAGE_ID]: "Avoid inline secrets. Use environment variables or secure config."
    },
    schema: []
  },

  create(context) {
    function checkNode(node, value) {
      if (typeof value !== "string") return;

      if (value.match(/secret|token|password/i)) {
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
