import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing, palette }) => ({
  socialIconWrapper: {
    marginTop: spacing(3),
  },
  socialLoginButton: {
    border: `1px solid ${palette.gray.light}`,
  },
  socialIcon: {
    marginRight: spacing(1),
  },
}));
