import { loader } from 'graphql.macro';

const schemas = [
  loader('./graphql/auth.gql'),
  loader('./graphql/task.gql'),
  loader('./graphql/billing.gql'),
  loader('./graphql/company.gql'),
  loader('./graphql/file.gql'),
  loader('./graphql/list-pim.gql'),
  loader('./graphql/pim.gql'),
  loader('./graphql/pim-cadastre.gql'),
  loader('./graphql/pim-inside.gql'),
  loader('./graphql/pim-general.gql'),
  loader('./graphql/pim-aog.gql'),
  loader('./graphql/pim-parking-lot-general.gql'),
  loader('./graphql/pim-bog-general.gql'),
  loader('./graphql/pim-media.gql'),
  loader('./graphql/pim-outside.gql'),
  loader('./graphql/pim-prices.gql'),
  loader('./graphql/label.gql'),
  loader('./graphql/pim-services.gql'),
  loader('./graphql/pim-meters.gql'),
  loader('./graphql/pim-specification.gql'),
  loader('./graphql/pim-sales.gql'),
  loader('./graphql/pim-location.gql'),
  loader('./graphql/team.gql'),
  loader('./graphql/profile.gql'),
  loader('./graphql/schema.gql'),
  loader('./graphql/ncp-general.gql'),
  loader('./graphql/energy.gql'),
  loader('./graphql/identification-number.gql'),
  loader('./graphql/ncp-characteristics.gql'),
  loader('./graphql/ncp-list.gql'),
  loader('./graphql/media.gql'),
  loader('./graphql/characteristics.gql'),
  loader('./graphql/services.gql'),
  loader('./graphql/linked-pim.gql'),
  loader('./graphql/pim-bog-spaces.gql'),
  loader('./graphql/object-type-characteristics.gql'),
  loader('./graphql/notification.gql'),
  loader('./graphql/history.gql'),
  loader('./graphql/template.gql'),
];

export const loadSchemas = () => {
  return schemas.reduce((finalSchema, schema) => {
    return finalSchema + schema.loc?.source.body;
  }, '');
};
