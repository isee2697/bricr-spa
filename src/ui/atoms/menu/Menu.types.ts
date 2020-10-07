import { PopperProps } from '@material-ui/core/Popper';

export type MenuProps = PopperProps & {
  open: boolean;
  id: string | undefined;
  children: string | React.ReactNode;
  offsetTop?: number;
  offsetRight?: number;
  offsetBottom?: number;
  offsetLeft?: number;
  arrow?: boolean;
  onClose: () => void;
  actions?: React.ReactNode;
};
