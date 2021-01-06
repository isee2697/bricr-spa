import React from 'react';

import { Card, CardHeader, CardContent, Box, Typography, IconButton } from 'ui/atoms';
import { useLocale } from 'hooks';
import { ArrowDownIcon, MenuIcon } from 'ui/atoms/icons';
import { InfoSection } from 'ui/molecules';
import { EmailSectionsProps } from '../Details.types';
import { Counter } from 'ui/molecules/counter/Counter';

import { useStyles } from './Attachements.styles';

export const Attachements = ({ email: { files = [] } }: EmailSectionsProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        title={
          <Box display="flex" alignItems="center">
            <Typography variant="h2">{formatMessage({ id: 'email.attachements' })}</Typography>
            {formatMessage({ id: 'email.attachements' })}
            <Counter count={files?.length || 0} hasMarginLeft />
          </Box>
        }
        action={
          <IconButton size="small" variant="roundedContained">
            <ArrowDownIcon />
          </IconButton>
        }
      />
      <CardContent>
        {files &&
          files.map((file, index) => (
            <Box display="flex" alignItems="center" className={classes.attachementRow}>
              <Typography variant="h4" color="textSecondary" className={classes.index}>
                {index + 1}
              </Typography>
              <Box width="100%">
                <Typography variant="h3">{file.filename}</Typography>
              </Box>
              <IconButton size="small" variant="rounded">
                <MenuIcon />
              </IconButton>
            </Box>
          ))}
        {(!files || files.length === 0) && (
          <InfoSection emoji="✉️">
            <Typography variant="h3">{formatMessage({ id: 'email.attachments.empty_title' })}</Typography>
            <Typography variant="h3">{formatMessage({ id: 'email.attachments.empty_description' })}</Typography>
          </InfoSection>
        )}
      </CardContent>
    </Card>
  );
};
