import { ButtonProps as BaseButtonProps } from '@material-ui/core/Button';

export type SubmitButtonProps = BaseButtonProps & {
  isLoading?: boolean;
  spinnerColor?: 'primary' | 'secondary' | 'inherit';
};
