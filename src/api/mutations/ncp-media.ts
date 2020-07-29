import { gql } from 'apollo-boost';

export const UPDATE_NCP_MEDIA_DESCRIPTION = gql`
  mutation UpdateNcpMediaDescription($input: UpdateNcpMediaDescriptionInput!) {
    updateNcpMediaDescription(input: $input) {
      id
    }
  }
`;

export const ADD_NCP_PICTURE = gql`
  mutation AddNcpPictures($input: AddNcpPicturesInput!) {
    addNcpPictures(input: $input) {
      id
    }
  }
`;

export const UPDATE_NCP_PICTURE = gql`
  mutation UpdateNcpPicture($input: UpdateNcpPictureInput!) {
    updateNcpPicture(input: $input) {
      id
    }
  }
`;

export const ADD_NCP_MEDIA_LINK = gql`
  mutation AddNcpMediaLink($input: AddNcpMediaLinkInput!) {
    addNcpMediaLink(input: $input) {
      id
      mediaLinks {
        id
      }
    }
  }
`;

export const UPDATE_NCP_MEDIA_LINK = gql`
  mutation UpdateNcpMediaLink($input: UpdateNcpMediaLinkInput!) {
    updateNcpMediaLink(input: $input) {
      id
    }
  }
`;

export const ADD_NCP_TEXT_CHAPTER = gql`
  mutation AddNcpTextChapter($input: AddNcpTextChapterInput!) {
    addNcpTextChapter(input: $input) {
      id
      textChapters {
        id
      }
    }
  }
`;

export const UPDATE_NCP_TEXT_CHAPTER = gql`
  mutation UpdateNcpTextChapter($input: UpdateNcpTextChapterInput!) {
    updateNcpTextChapter(input: $input) {
      id
    }
  }
`;

export const ADD_NCP_USP = gql`
  mutation AddNcpUsps($input: AddNcpUspsInput!) {
    addNcpUsps(input: $input) {
      id
      usps {
        id
      }
    }
  }
`;

export const UPDATE_NCP_USP = gql`
  mutation UpdateNcpUsps($input: UpdateNcpUspsInput!) {
    updateNcpUsps(input: $input) {
      id
    }
  }
`;

export const ADD_NCP_TAG = gql`
  mutation AddNcpTag($input: AddNcpTagInput!) {
    addNcpTag(input: $input) {
      id
      tags {
        id
      }
    }
  }
`;

export const UPDATE_NCP_TAG = gql`
  mutation UpdateNcpTag($input: UpdateNcpTagInput!) {
    updateNcpTag(input: $input) {
      id
    }
  }
`;
