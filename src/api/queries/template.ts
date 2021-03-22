import { gql } from 'apollo-boost';

export const GET_QUESTIONAIRE = gql`
  query GetQuestionaire($id: ID!) {
    getQuestionaire(id: $id) 
    @rest(type: "Questionaire", path: "/questionaire/{args.id}", method: "POST", endpoint: "default") {
      id
      questionaireName
      isAdmin
      published
      copyFromId
      entity {
        type
        subType
      }
    }
  }
`;
