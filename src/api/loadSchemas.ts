import { loader } from 'graphql.macro';

const schemas = [
  loader('./graphql/auth.gql'),
  loader('./graphql/file.gql'),
  loader('./graphql/list-pim.gql'),
  loader('./graphql/pim.gql'),
  loader('./graphql/pim-cadastre.gql'),
  loader('./graphql/pim-floor.gql'),
  loader('./graphql/pim-general.gql'),
  loader('./graphql/pim-label.gql'),
  loader('./graphql/pim-media.gql'),
  loader('./graphql/pim-outside.gql'),
  loader('./graphql/pim-prices.gql'),
  loader('./graphql/pim-services.gql'),
  loader('./graphql/pim-specification.gql'),
  loader('./graphql/profile.gql'),
  loader('./graphql/schema.gql'),
];

export const loadSchemas = () => {
  return schemas.reduce((finalSchema, schema) => {
    return finalSchema + schema.loc?.source.body;
  }, '');
};
