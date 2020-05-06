import { makeStyles } from '@material-ui/core/styles';

import { PlaceholderProps } from './Placeholder.types';

export const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: (props: PlaceholderProps) => theme.spacing(props.marginLeft || 0),
    marginRight: (props: PlaceholderProps) => theme.spacing(props.marginRight || 0),
    marginTop: (props: PlaceholderProps) => theme.spacing(props.mt || 0),
    marginBottom: (props: PlaceholderProps) => theme.spacing(props.mb || 0),
    borderRadius: (props: PlaceholderProps) =>
      props.variant === 'rect' ? theme.spacing(props.borderRadius || 1 / 2) : undefined,
  },
}));
