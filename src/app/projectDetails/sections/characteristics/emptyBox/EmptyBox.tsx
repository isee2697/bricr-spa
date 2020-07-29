import React from 'react';

import { Box, Button, Typography } from 'ui/atoms';
import { InfoSection } from 'ui/molecules';
import { LinkIcon } from 'ui/atoms/icons';

import { useStyles } from './EmptyBox.styles';
import { EmptyBoxProps } from './EmptyBox.types';

export const EmptyBox = ({ messageLineFirst, messageLineSecond, buttonText, onClick }: EmptyBoxProps) => {
  const classes = useStyles();

  return (
    <InfoSection emoji="🤔" className={classes.container}>
      <Typography variant="h3" className={classes.text}>
        {messageLineFirst}
      </Typography>
      <Typography variant="h3" className={classes.text}>
        {messageLineSecond}
      </Typography>
      <Box mt={2}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<LinkIcon color="inherit" />}
          size="large"
          onClick={onClick}
        >
          {buttonText}
        </Button>
      </Box>
    </InfoSection>
  );
};
