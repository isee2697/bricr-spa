import { gql } from 'apollo-boost';

export const NCP_MEDIA = gql`
  query NcpMedia($id: ID!, $picturesSort: Sort) {
    getNcpMedia(id: $id) {
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
          url
        }
      }
      mainPictureId
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
