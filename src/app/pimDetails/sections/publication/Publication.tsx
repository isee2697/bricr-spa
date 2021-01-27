import React from 'react';

import { Box, Button, NavBreadcrumbs } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';
import { useLocale } from 'hooks';

import { PublicationProps } from './Publication.types';
import { useStyles } from './Publication.styles';

export const Publication = ({ onSidebarOpen, isSidebarVisible }: PublicationProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <>
      <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
        <NavBreadcrumbs />
        <Button size="small" variant="contained" color="primary" startIcon={<AddIcon />}>
          {formatMessage({ id: 'pim_details.publication.add_publication' })}
        </Button>
      </Box>
      <Page withoutHeader>
        <Box></Box>
      </Page>
    </>
  );
};
