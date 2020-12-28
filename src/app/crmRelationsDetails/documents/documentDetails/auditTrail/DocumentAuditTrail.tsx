import React from 'react';

import { Box, Card, CardContent, CardHeader, IconButton, MenuItem, Select } from 'ui/atoms';
import { useLocale } from 'hooks';
import { ManageIcon, SearchIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';
import { Timeline } from 'app/crmRelationsDetails/crmRelationsDetailsDashboard/crmRelationsDetailsDashboardBoards/crmRelationsDetailsDashboardBoardsTimeline/CrmRelationsDetailsDashboardBoardsTimeline.types';
import { CrmRelationsDetailsTimelineBoards } from 'app/crmRelationsDetails/crmRelationsDetailsTimeline/crmRelationsDetailsTimelineBoards/CrmRelationsDetailsTimelineBoards';
import { CRM_DOCUMENT_TIMELINE } from 'api/mocks/crm-relation';

import { useStyles } from './DocumentAuditTrail.styles';

export const DocumentAuditTrail = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const timelineItems: Timeline[] = CRM_DOCUMENT_TIMELINE;
  const sortOptions = ['last_edited'];

  return (
    <Page withoutHeader>
      <Card>
        <CardHeader
          title={formatMessage({ id: 'crm.details.documents.audit_trail' })}
          action={
            <Box display="flex">
              <IconButton variant="roundedContained" size="small" onClick={() => {}}>
                <ManageIcon color="inherit" />
              </IconButton>
              <Box mr={2} />
              <IconButton variant="roundedContained" size="small" onClick={() => {}}>
                <SearchIcon />
              </IconButton>
            </Box>
          }
        />
        <CardContent>
          <Box className={classes.subheader}>
            <Select variant="outlined" value={sortOptions[0]} className={classes.sort}>
              {sortOptions.map(option => (
                <MenuItem key={option} value={option}>
                  {formatMessage({ id: `crm.details.timeline.sort_options.${option}` })}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Box mt={3}>
            <CrmRelationsDetailsTimelineBoards timelineItems={timelineItems} />
          </Box>
        </CardContent>
      </Card>
    </Page>
  );
};
