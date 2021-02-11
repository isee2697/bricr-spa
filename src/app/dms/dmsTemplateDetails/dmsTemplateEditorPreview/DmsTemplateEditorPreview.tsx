import { Box } from '@material-ui/core';
import React from 'react';

import { useStyles } from './DmsTempalteEditorPreview.styles';

export const DmsTemplateEditorPreview = () => {
  const classes = useStyles();

  return (
    <Box className={classes.previewPanel} width="100%" mt={2}>
      BUSINESS CONTRACT PREVIEW
    </Box>
  );
};
