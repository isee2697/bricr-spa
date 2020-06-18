import { styled } from '@material-ui/core/styles';

import { Button } from 'ui/atoms';

export const CancelButton = styled(Button)(({ theme: { palette, typography } }) => ({
  borderColor: palette.primary.main,
  color: palette.primary.main,
  ...typography.h4,
}));
