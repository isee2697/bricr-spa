import { gql } from 'apollo-boost';

export const INIT_SEND_FILE = gql`
  mutation InitSendFile($input: InitSendFileInput!) {
    initSendFile(input: $input) @rest(type: "File!", method: "POST", path: "", endpoint: "upload") {
      signedUrl
      id
    }
  }
`;

export const UPLOAD_FILE = gql`
  mutation UploadFile($input: UploadFileInput!, $pathBuilder: PathBuilder) {
    uploadFile(input: $input, pathBuilder: $pathBuilder)
      @rest(type: "UploadFileResponse!", pathBuilder: $pathBuilder, method: "PUT", bodySerializer: "fileEncode") {
      id
    }
  }
`;

export const ADD_FILES = gql`
  mutation AddFiles($input: AddFilesInput!) {
    addFiles(input: $input) {
      url
    }
  }
`;
