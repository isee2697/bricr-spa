import { ChipProps as DefaultChipProps } from '@material-ui/core/Chip';

export type ChipProps = DefaultChipProps & {
  bgcolor?: string;
  fontcolor?: string;
};
