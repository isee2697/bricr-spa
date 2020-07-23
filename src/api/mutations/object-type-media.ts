import { gql } from 'apollo-boost';

export const UPDATE_OBJECT_TYPE_MEDIA_DESCRIPTION = gql`
  mutation UpdateObjectTypeMediaDescription($input: CommonUpdateMediaDescriptionInput!) {
    updateObjectTypeMediaDescription(input: $input) {
      id
    }
  }
`;

export const ADD_OBJECT_TYPE_PICTURE = gql`
  mutation addObjectTypePictures($input: CommonAddPicturesInput!) {
    addObjectTypePictures(input: $input) {
      id
    }
  }
`;

export const UPDATE_OBJECT_TYPE_PICTURE = gql`
  mutation UpdateObjectTypePicture($input: CommonUpdatePictureInput!) {
    updateObjectTypePicture(input: $input) {
      id
    }
  }
`;

export const ADD_OBJECT_TYPE_MEDIA_LINK = gql`
  mutation AddObjectTypeMediaLink($input: CommonAddMediaLinkInput!) {
    addObjectTypeMediaLink(input: $input) {
      id
      mediaLinks {
        id
      }
    }
  }
`;

export const UPDATE_OBJECT_TYPE_MEDIA_LINK = gql`
  mutation UpdateObjectTypeMediaLink($input: CommonUpdateMediaLinkInput!) {
    updateObjectTypeMediaLink(input: $input) {
      id
    }
  }
`;

export const ADD_OBJECT_TYPE_TEXT_CHAPTER = gql`
  mutation AddObjectTypeTextChapter($input: CommonAddTextChapterInput!) {
    addObjectTypeTextChapter(input: $input) {
      id
      textChapters {
        id
      }
    }
  }
`;

export const UPDATE_OBJECT_TYPE_TEXT_CHAPTER = gql`
  mutation UpdateObjectTypeTextChapter($input: CommonUpdateTextChapterInput!) {
    updateObjectTypeTextChapter(input: $input) {
      id
    }
  }
`;

export const ADD_OBJECT_TYPE_USP = gql`
  mutation AddObjectTypeUsps($input: CommonAddUspsInput!) {
    addObjectTypeUsps(input: $input) {
      id
      usps {
        id
      }
    }
  }
`;

export const UPDATE_OBJECT_TYPE_USP = gql`
  mutation UpdateObjectTypeUsps($input: CommonUpdateUspsInput!) {
    updateObjectTypeUsps(input: $input) {
      id
    }
  }
`;

export const ADD_OBJECT_TYPE_TAG = gql`
  mutation AddObjectTypeTag($input: CommonAddTagInput!) {
    addObjectTypeTag(input: $input) {
      id
      tags {
        id
      }
    }
  }
`;

export const UPDATE_OBJECT_TYPE_TAG = gql`
  mutation UpdateObjectTypeTag($input: CommonUpdateTagInput!) {
    updateObjectTypeTag(input: $input) {
      id
    }
  }
`;
