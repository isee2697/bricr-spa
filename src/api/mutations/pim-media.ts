import { gql } from 'apollo-boost';

export const ADD_PIM_TAG = gql`
  mutation AddTag($input: AddTagInput!) {
    addTag(input: $input) {
      pim {
        id
      }
      newTag {
        id
      }
    }
  }
`;

export const UPDATE_PIM_TAG = gql`
  mutation UpdateTag($input: UpdateTagInput!) {
    updateTag(input: $input) {
      id
    }
  }
`;

export const ADD_PIM_USP = gql`
  mutation AddUsp($input: AddUspInput!) {
    addUsp(input: $input) {
      pim {
        id
      }
      newUsp {
        id
      }
    }
  }
`;

export const UPDATE_PIM_USP = gql`
  mutation UpdateUsp($input: UpdateUspInput!) {
    updateUsp(input: $input) {
      id
    }
  }
`;

export const ADD_PIM_MEDIA_LINK = gql`
  mutation AddMediaLink($input: AddMediaLinkInput!) {
    addMediaLink(input: $input) {
      pim {
        id
      }
      newMediaLink {
        id
      }
    }
  }
`;

export const UPDATE_PIM_MEDIA_LINK = gql`
  mutation UpdateMediaLink($input: UpdateMediaLinkInput!) {
    updateMediaLink(input: $input) {
      id
    }
  }
`;

export const ADD_PIM_TEXT_CHAPTER = gql`
  mutation AddTextChapter($input: AddTextChapterInput!) {
    addTextChapter(input: $input) {
      pim {
        id
      }
      newChapter {
        id
      }
    }
  }
`;

export const UPDATE_PIM_TEXT_CHAPTER = gql`
  mutation UpdateTextChapter($input: UpdateTextChapterInput!) {
    updateTextChapter(input: $input) {
      id
    }
  }
`;

export const ADD_PIM_PICTURE = gql`
  mutation AddPictures($input: AddPicturesInput!) {
    addPictures(input: $input) {
      pim {
        id
      }
    }
  }
`;

export const UPDATE_PIM_PICTURE = gql`
  mutation UpdatePicture($input: UpdatePictureInput!) {
    updatePicture(input: $input) {
      id
    }
  }
`;
