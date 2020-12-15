import React, { useState } from 'react';

import { useLocale, useModalDispatch } from 'hooks';
import { Box, Button, Card, CardContent, CardHeader, FormControlLabel, IconButton, Switch, Typography } from 'ui/atoms';
import { AddIcon, ArrowUpIcon, LinkIcon } from 'ui/atoms/icons';
import { InfoSection } from 'ui/molecules';
import { CrmListItem } from 'app/crm/crmListItem/CrmListItem';

import { ClientProps } from './Client.types';
import { LinkContactModalContainer } from './linkModal/LinkContactModalContainer';

export const Client = ({ crms = [], onLinkSalesCrm }: ClientProps) => {
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);
  const { open } = useModalDispatch();

  return (
    <>
      <Card>
        <CardHeader
          title={formatMessage({ id: 'sales_details.client.client' })}
          action={
            <Box display="flex" alignItems="center">
              <FormControlLabel
                control={<Switch checked={isEditing} onChange={() => setIsEditing(!isEditing)} color="primary" />}
                label={formatMessage({ id: 'form_section.edit_mode' })}
                labelPlacement="start"
              />
              <Box ml={3} />
              <IconButton size="small" variant="circle" color="primary" onClick={() => open('link-contact')}>
                <AddIcon />
              </IconButton>
              <Box ml={3} />
              <IconButton size="small" variant="roundedContained" onClick={() => {}}>
                <ArrowUpIcon />
              </IconButton>
            </Box>
          }
        />
        <CardContent>
          {crms.length === 0 && (
            <InfoSection emoji="🤔" color="gradient">
              <Typography variant="h3">
                {formatMessage({
                  id: 'sales_details.client.client.linked_clients.empty_title',
                })}
              </Typography>
              <Typography variant="h3">
                {formatMessage({
                  id: 'sales_details.client.client.linked_clients.empty_description',
                })}
              </Typography>
              <Box mt={2}>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => {}}
                  startIcon={<LinkIcon color="inherit" />}
                  size="small"
                >
                  {formatMessage({ id: 'sales_details.client.client.linked_clients.link_client' })}
                </Button>
              </Box>
            </InfoSection>
          )}
          {crms.map(crm => (
            <CrmListItem crm={crm} />
          ))}
        </CardContent>
      </Card>
      <LinkContactModalContainer onSubmit={onLinkSalesCrm} />
    </>
  );
};
