export type PersonChipProps = {
  avatarVariant?: 'circle' | 'rounded' | 'square';
  name: string;
  image?: string;
  label?: string;
  onDelete?: VoidFunction;
};
