/* eslint-disable @typescript-eslint/no-var-requires */
const promptDirectory = require('inquirer-directory');

const componentTypes = {
  REACT_COMPONENT: 'React component',
  CUSTOM_HOOK: 'Custom hook',
};

const customHookGenerator = () => ({
  description: componentTypes.CUSTOM_HOOK,
  prompts: [
    {
      type: 'directory',
      name: 'directory',
      message: 'select directory',
      basePath: './src/hooks',
    },
    {
      type: 'input',
      name: 'name',
      message: 'hook name',
    },
  ],
  actions: function() {
    const actions = [
      {
        type: 'add',
        path: 'src/hooks/{{directory}}/{{camelCase name}}/{{camelCase name}}.tsx',
        templateFile: 'plop-templates/hook/hook.hbs',
      },
      {
        type: 'add',
        path: 'src/hooks/{{directory}}/{{camelCase name}}/{{camelCase name}}.test.tsx',
        templateFile: 'plop-templates/hook/hook.test.hbs',
      },
    ];

    return actions;
  },
});

const reactComponentGenerator = () => ({
  description: componentTypes.REACT_COMPONENT,
  prompts: [
    {
      type: 'list',
      name: 'baseDir',
      message: 'base directory',
      choices: ['ui', 'app'],
      default: 1,
    },
    {
      type: 'directory',
      name: 'directory',
      message: 'select directory',
      basePath: './src/ui',
      when: answers => answers.baseDir === 'ui',
    },
    {
      type: 'directory',
      name: 'directory',
      message: 'select directory',
      basePath: './src/app',
      when: answers => answers.baseDir === 'app',
    },
    {
      type: 'input',
      name: 'name',
      message: 'component name',
    },
    {
      type: 'confirm',
      name: 'useContainer',
      message: 'use container',
      default: false,
    },
    {
      type: 'confirm',
      name: 'useReadme',
      message: 'use Readme.md',
      default: false,
    },
  ],
  actions: function(data) {
    const actions = [
      {
        type: 'add',
        path: `src/${data.baseDir}/{{directory}}/{{camelCase name}}/{{pascalCase name}}.tsx`,
        templateFile: 'plop-templates/component/Component.hbs',
      },
      {
        type: 'add',
        path: `src/${data.baseDir}/{{directory}}/{{camelCase name}}/{{pascalCase name}}.test.tsx`,
        templateFile: 'plop-templates/component/Component.test.hbs',
      },
      {
        type: 'add',
        path: `src/${data.baseDir}/{{directory}}/{{camelCase name}}/{{pascalCase name}}.types.ts`,
        templateFile: 'plop-templates/component/Component.types.hbs',
      },
    ];

    if (data.useContainer) {
      actions.push({
        type: 'add',
        path: `src/${data.baseDir}/{{directory}}/{{camelCase name}}/{{pascalCase name}}Container.tsx`,
        templateFile: 'plop-templates/component/ComponentContainer.hbs',
      });
    }

    if (data.useReadme) {
      actions.push({
        type: 'add',
        path: `src/${data.baseDir}/{{directory}}/{{camelCase name}}/Readme.md`,
        templateFile: 'plop-templates/component/Component.md.hbs',
      });
    }

    return actions;
  },
});

module.exports = function(plop) {
  plop.setPrompt('directory', promptDirectory);
  plop.setGenerator(componentTypes.REACT_COMPONENT, reactComponentGenerator());
  plop.setGenerator(componentTypes.CUSTOM_HOOK, customHookGenerator());
};
