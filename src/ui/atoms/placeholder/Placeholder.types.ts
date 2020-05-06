import { SkeletonProps } from '@material-ui/lab/Skeleton';

export type PlaceholderProps = SkeletonProps & {
  marginLeft?: number;
  marginRight?: number;
  mt?: number;
  mb?: number;
  borderRadius?: number;
};
