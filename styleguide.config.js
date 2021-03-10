module.exports = {
  components: 'src/ui/**/*.tsx',
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json', {
    propFilter: { skipPropsWithoutDoc: false },
  }).parse,
  skipComponentsWithoutExample: true,
  styleguideComponents: {
    Wrapper: require('path').join(__dirname, 'src/styleguidistWrapper/StyleguidistWrapper'),
  },
  sections: [
    {
      name: 'Style Guide',
      content: 'src/ui/Documentation.md',
    },
    {
      name: 'Atoms Components',
      components: 'src/ui/atoms/**/*.tsx',
    },
    {
      name: 'Molecules Components',
      components: 'src/ui/molecules/**/*.tsx',
    },
    {
      name: 'Organisms Components',
      components: 'src/ui/organisms/**/*.tsx',
    },
    {
      name: 'Templates Components',
      components: 'src/ui/templates/**/*.tsx',
    },
    {
      name: 'Form Components',
      components: 'src/form/fields/**/*.tsx',
    },
    {
      name: 'Shared Components',
      components: 'src/app/shared/**/*.tsx',
    },
  ],
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap',
        },
      ],
    },
  },
  styles: {
    Playground: {
      preview: {
        position: 'relative',
        transform: 'translate3d(0, 0, 0)',
      },
    },
  },
};
