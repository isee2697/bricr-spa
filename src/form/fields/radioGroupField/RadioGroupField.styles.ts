import { makeStyles } from '@material-ui/core/styles';

import { RadioGroupFieldStylesProps } from './RadioGroupField.types';

export const useStyles = makeStyles({
  action: {
    height: (props: RadioGroupFieldStylesProps) => props.tileHeight,
  },
});
