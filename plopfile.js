const config = (plop) => {
  plop.setHelper("camelCase", (text) => {
    return text
      .replace(/^\w|[A-Z]|\b\w/g, function (word) {
        return word.toUpperCase();
      })
      .replace(/\s+/g, "");
  });

  plop.setGenerator("page", {
    description: "creates a page component under src/page directory",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of page component?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/pages/{{dashCase name}}/{{camelCase name}}.tsx",
        templateFile: "./templates/react-component.hbs",
      },
      {
        type: "add",
        path: "src/pages/{{dashCase name}}/{{camelCase name}}.test.tsx",
      },
      {
        type: "add",
        path: "src/pages/{{dashCase name}}/{{camelCase name}}.scss",
      },
    ],
  });

  plop.setGenerator("component", {
    description: "creates a component under src/components directory",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of component?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{dashCase name}}/{{camelCase name}}.tsx",
        templateFile: "./templates/react-component.hbs",
      },
      {
        type: "add",
        path: "src/components/{{dashCase name}}/{{camelCase name}}.test.tsx",
      },
      {
        type: "add",
        path: "src/components/{{dashCase name}}/{{camelCase name}}.scss",
      },
    ],
  });

  plop.setGenerator("resource", {
    description: "creates a resource under src/resources directory",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of resource?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/resources/{{camelCase name}}.tsx",
      },
    ],
  });

  plop.setGenerator("service", {
    description: "creates a service file under src/services directory",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of service?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/services/{{camelCase name}}.tsx",
      },
    ],
  });

  plop.setGenerator("slice", {
    description: "creates a redux toolkit slice src/store directory",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of slice?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/store/{{dashCase name}}/slice.tsx",
        templateFile: "./templates/slice.hbs",
      },
      {
        type: "add",
        path: "src/store/{{dashCase name}}/slice.test.tsx",
      },
    ],
  });

  plop.setGenerator("utility", {
    description: "creates a utility file under src/utils directory",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of utility?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/utils/{{camelCase name}}.tsx",
      },
    ],
  });
};

export default config;
