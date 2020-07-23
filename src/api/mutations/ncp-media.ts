import { gql } from 'apollo-boost';

export const UPDATE_NCP_MEDIA_DESCRIPTION = gql`
  mutation UpdateNcpMediaDescription($input: CommonUpdateMediaDescriptionInput!) {
    updateNcpMediaDescription(input: $input) {
      id
    }
  }
`;

export const ADD_NCP_PICTURE = gql`
  mutation AddNcpPictures($input: CommonAddPicturesInput!) {
    addNcpPictures(input: $input) {
      id
    }
  }
`;

export const UPDATE_NCP_PICTURE = gql`
  mutation UpdateNcpPicture($input: CommonUpdatePictureInput!) {
    updateNcpPicture(input: $input) {
      id
    }
  }
`;

export const ADD_NCP_MEDIA_LINK = gql`
  mutation AddNcpMediaLink($input: CommonAddMediaLinkInput!) {
    addNcpMediaLink(input: $input) {
      id
      mediaLinks {
        id
      }
    }
  }
`;

export const UPDATE_NCP_MEDIA_LINK = gql`
  mutation UpdateNcpMediaLink($input: CommonUpdateMediaLinkInput!) {
    updateNcpMediaLink(input: $input) {
      id
    }
  }
`;

export const ADD_NCP_TEXT_CHAPTER = gql`
  mutation AddNcpTextChapter($input: CommonAddTextChapterInput!) {
    addNcpTextChapter(input: $input) {
      id
      textChapters {
        id
      }
    }
  }
`;

export const UPDATE_NCP_TEXT_CHAPTER = gql`
  mutation UpdateNcpTextChapter($input: CommonUpdateTextChapterInput!) {
    updateNcpTextChapter(input: $input) {
      id
    }
  }
`;

export const ADD_NCP_USP = gql`
  mutation AddNcpUsps($input: CommonAddUspsInput!) {
    addNcpUsps(input: $input) {
      id
      usps {
        id
      }
    }
  }
`;

export const UPDATE_NCP_USP = gql`
  mutation UpdateNcpUsps($input: CommonUpdateUspsInput!) {
    updateNcpUsps(input: $input) {
      id
    }
  }
`;

export const ADD_NCP_TAG = gql`
  mutation AddNcpTag($input: CommonAddTagInput!) {
    addNcpTag(input: $input) {
      id
      tags {
        id
      }
    }
  }
`;

export const UPDATE_NCP_TAG = gql`
  mutation UpdateNcpTag($input: CommonUpdateTagInput!) {
    updateNcpTag(input: $input) {
      id
    }
  }
`;
