import { Box } from '@material-ui/core';
import React from 'react';

import { useStyles } from './DmsTemplateEditorPanel.styles';

export const DmsTemplateEditorPanel = () => {
  const classes = useStyles();

  return (
    <Box className={classes.previewPanel} width="100%" mt={2}>
      Template Editor Panel
    </Box>
  );
};
