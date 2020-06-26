import { gql } from 'apollo-boost';

export const PIM_MEDIA = gql`
  query PimMedia($id: ID!) {
    getPimMedia(id: $id) {
      id
      dateUpdated
      lastEditedBy {
        id
        firstName
        lastName
      }
      pictures {
        id
        name
        description
        type
        file {
          id
          key
          fileName
        }
      }
      mediaLinks {
        id
        name
        type
        url
      }
      textChapters {
        id
        name
        type
        text
      }
      usps {
        id
        name
        description
        type
      }
      tags {
        id
        name
        description
        type
      }
    }
  }
`;
