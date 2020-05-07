import { ButtonProps as BaseButtonProps } from '@material-ui/core/Button';

export type SubmitButtonProps = Omit<BaseButtonProps, 'color'> & {
  isLoading: boolean;
  spinnerColor: 'primary' | 'secondary' | 'inherit';
};
