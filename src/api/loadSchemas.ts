import { loader } from 'graphql.macro';

const schemas = [
  loader('./graphql/auth.gql'),
  loader('./graphql/file.gql'),
  loader('./graphql/list-pim.gql'),
  loader('./graphql/pim.gql'),
  loader('./graphql/pim-cadastre.gql'),
  loader('./graphql/pim-inside.gql'),
  loader('./graphql/pim-general.gql'),
  loader('./graphql/pim-media.gql'),
  loader('./graphql/pim-outside.gql'),
  loader('./graphql/pim-prices.gql'),
  loader('./graphql/label.gql'),
  loader('./graphql/pim-services.gql'),
  loader('./graphql/pim-specification.gql'),
  loader('./graphql/pim-sales.gql'),
  loader('./graphql/pim-location.gql'),
  loader('./graphql/profile.gql'),
  loader('./graphql/schema.gql'),
  loader('./graphql/ncp-general.gql'),
  loader('./graphql/energy.gql'),
  loader('./graphql/identification-number.gql'),
  loader('./graphql/ncp-characteristics.gql'),
];

export const loadSchemas = () => {
  return schemas.reduce((finalSchema, schema) => {
    return finalSchema + schema.loc?.source.body;
  }, '');
};
