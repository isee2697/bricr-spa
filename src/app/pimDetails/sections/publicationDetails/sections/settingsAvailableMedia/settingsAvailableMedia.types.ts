export type AvailableMediaItem = {
  id: string;
  type: string;
  content?: string;
  description?: string;
  link?: string;
};

export type AvailableMediaHeader = 'type' | 'content' | 'description' | 'link';
