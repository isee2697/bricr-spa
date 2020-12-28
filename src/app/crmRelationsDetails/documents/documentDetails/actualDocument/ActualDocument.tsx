import React from 'react';

import { Box, Chip, Grid, MenuItem, Select, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';

import { useStyles } from './ActualDocument.styles';
import { ActualDocumentProps } from './ActualDocument.types';

export const ActualDocument = ({ document }: ActualDocumentProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const languageOptions = ['english'];

  return (
    <Box mt={2} width="100%">
      <Grid xs={12} item>
        <Box display="flex" alignItems="center">
          <Typography variant="h1">{document.name}</Typography>
        </Box>
      </Grid>
      <Box mt={4.5} width="100%">
        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
          <Box display="flex" alignItems="center">
            <Typography className={classes.version} variant="h5">
              {formatMessage({ id: 'common.version' })} {document.version}
            </Typography>
            <Box ml={6} />
            <Chip size="medium" label={document.status} />
          </Box>
          <Select name="language" variant="outlined" className={classes.languages}>
            {languageOptions.map(option => (
              <MenuItem key={option} value={option}>
                {formatMessage({ id: `language.${option}` })}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Box mt={2.5}>
          <iframe className={classes.pdfViewer} src={document.file} title={document.name}></iframe>
        </Box>
      </Box>
    </Box>
  );
};
