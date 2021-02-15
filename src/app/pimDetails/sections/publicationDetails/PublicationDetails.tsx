import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { AppRoute } from 'routing/AppRoute.enum';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { Box, Card, CardContent, CardHeader, Grid, IconButton, NavBreadcrumbs } from 'ui/atoms';
import { ExitIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';
import { useLocale } from 'hooks';

import { PublicationDetailsTab } from './PublicationDetails.types';
import { PublicationDetailsTabs } from './publicationDetailsTabs/PublicationDetailsTabs';
import { Checklist } from './sections/checklist/Checklist';
import { Settings } from './sections/settings/Settings';
import { ChecklistItem } from './sections/checklist/Checklist.types';
import { SettingsGeneral } from './sections/settingsGeneral/SettingsGeneral';
import { SettingsPictures } from './sections/settingsPictures/SettingsPictures';
import { SettingsAvailableMedia } from './sections/settingsAvailableMedia/SettingsAvailableMedia';
import { SettingsFloorPlans } from './sections/settingsFloorPlans/SettingsFloorPlans';
import { StatusTimeline } from './sections/statusTimeline/StatusTimeline';

export const PublicationDetails = ({ title }: PimDetailsSectionProps) => {
  const { push } = useHistory();
  const { id } = useParams<{ id: string }>();
  const { formatMessage } = useLocale();
  const [status, setStatus] = useState<PublicationDetailsTab>(PublicationDetailsTab.Checklist);
  const [emptyChecklist, showEmptyChecklist] = useState(false);

  const checklists: ChecklistItem[] = [
    {
      id: '0001',
      section: 'Outside',
      card: 'Garden',
      field: 'Type',
      reason: 'Must be minimal 1 type',
    },
    {
      id: '0002',
      section: 'Outside',
      card: 'Garden',
      field: 'Type',
      reason: 'Must be minimal 1 type',
    },
  ];

  return (
    <>
      <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
        <NavBreadcrumbs />
        <IconButton
          size="small"
          variant="rounded"
          onClick={() => push(joinUrlParams(`${AppRoute.pimDetails}/publication`, { id }))}
        >
          <ExitIcon />
        </IconButton>
      </Box>
      <Page title={title} titleActions={<></>}>
        <Grid item xs={12}>
          <Card>
            <CardHeader title={formatMessage({ id: 'pim_details.publication.funda' })} />
            <CardContent>
              <PublicationDetailsTabs
                checklistCount={emptyChecklist ? 0 : 8}
                statusCount={5}
                status={status}
                onStatusChange={setStatus}
              />
              {status === PublicationDetailsTab.Checklist && (
                <Checklist
                  items={checklists}
                  emptyChecklist={emptyChecklist}
                  onUpdateEmptyChecklist={showEmptyChecklist}
                />
              )}
              {status === PublicationDetailsTab.Settings && <Settings />}
              {status === PublicationDetailsTab.Status && <StatusTimeline />}
            </CardContent>
          </Card>
          {status === PublicationDetailsTab.Settings && (
            <>
              <Box mt={4}>
                <SettingsGeneral />
              </Box>
              <Box mt={4}>
                <SettingsPictures />
              </Box>
              <Box mt={4}>
                <SettingsFloorPlans />
              </Box>
              <Box mt={4}>
                <SettingsAvailableMedia />
              </Box>
            </>
          )}
        </Grid>
      </Page>
    </>
  );
};
