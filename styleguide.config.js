module.exports = {
  components: 'src/ui/**/*.tsx',
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json', {
    propFilter: { skipPropsWithoutDoc: true },
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
      name: 'Components',
      components: 'src/ui/**/*.tsx',
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
};