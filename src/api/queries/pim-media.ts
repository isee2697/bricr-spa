import { gql } from 'apollo-boost';

export const PIM_MEDIA = gql`
  query PimMedia($id: ID!, $picturesSort: Sort) {
    getPimMedia(id: $id) {
      id
      description
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
