import { gql } from 'apollo-boost';

export const OBJECT_TYPE_MEDIA = gql`
  query ObjectTypeMedia($id: ID!, $picturesSort: Sort) {
    getObjectTypeMedia(id: $id) {
      id
      mediaDescription
      dateUpdated
      lastEditedBy {
        id
        firstName
        lastName
      }
      pictures(sort: $picturesSort) {
        id
        name
        description
        type
        dateUpdated
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
