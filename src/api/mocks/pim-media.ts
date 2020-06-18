import { PimMedia } from 'api/types';
import { FILE_1 } from 'api/mocks/file';

export const PIM_MEDIA_1: PimMedia = {
  id: 'a35b1cca-6b90-47ac-8493-d1d20b9d0774',
  pictures: [],
  mediaLinks: null,
  textChapters: null,
  usps: null,
  tags: null,
};

export const MEDIA_LINK = {
  id: '987caff3-95d0-4ce6-9a8e-70eb3efb6d76',
  name: null,
  type: null,
  url: null,
};

export const MEDIA_CHAPTER = {
  id: 'f8e9958c-291e-404c-991c-13b049646911',
  name: null,
  type: null,
  text: null,
};

export const MEDIA_USPS = {
  id: '839d4913-fcb8-4fb1-a08a-2f3b84fb4b5d',
  name: null,
  description: null,
  type: null,
};

export const MEDIA_TAG = {
  id: '4592d159-453c-4c05-b8cb-087bba9e7385',
  name: null,
  description: null,
  type: null,
};

export const MEDIA_PICTURE = {
  id: '4aa2d159-453c-4c05-b8cb-087bba9e7385',
  name: null,
  description: null,
  type: null,
  file: FILE_1,
};
