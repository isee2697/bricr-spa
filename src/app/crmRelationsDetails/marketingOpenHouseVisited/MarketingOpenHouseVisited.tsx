import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { useEntityType } from 'app/shared/entityType';
import { useLocale } from 'hooks';
import { Box, Button, Card, CardContent, CardHeader, IconButton, NavBreadcrumb } from 'ui/atoms';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { CrmRelationsDetailsHeader } from '../crmRelationsDetailsHeader/CrmRelationsDetailsHeader';
import { Page } from 'ui/templates';
import { ExitIcon } from 'ui/atoms/icons';
import { AutosaveForm } from 'ui/organisms';
import { GenericField, RadioGroupField } from 'form/fields';

import { MarketingOpenHouseVisitedProps } from './MarketingOpenHouseVisited.types';
import { YesNoOptions } from './dictionaries';

export const MarketingOpenHouseVisited = ({
  title,
  isSidebarVisible,
  onSidebarOpen,
}: MarketingOpenHouseVisitedProps) => {
  const { baseUrl } = useEntityType();
  const urlParams = useParams();
  const { formatMessage } = useLocale();
  const { push } = useHistory();

  const handleSave = async () => undefined;

  return (
    <>
      <NavBreadcrumb
        title={formatMessage({ id: 'crm.details.marketing_open_house.title' })}
        to="/marketing_open_house"
        urlBase={joinUrlParams(baseUrl, urlParams)}
      />
      <CrmRelationsDetailsHeader
        onSidebarOpen={onSidebarOpen}
        isSidebarVisible={isSidebarVisible}
        actions={
          <IconButton
            size="small"
            variant="roundedContained"
            onClick={() => push(`${joinUrlParams(baseUrl, urlParams)}/marketing_open_house`)}
          >
            <ExitIcon />
          </IconButton>
        }
      />
      <Page title={title} titleActions={<></>}>
        <Card>
          <CardHeader title={formatMessage({ id: 'crm.details.marketing_open_house.result ' })} />
          <CardContent>
            <AutosaveForm onSave={handleSave}>
              <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                <Box width="100%">
                  <RadioGroupField name="result" options={YesNoOptions} />
                </Box>
                <Button variant="outlined" color="primary">
                  {formatMessage({ id: 'crm.details.marketing_open_house.ask_result' })}
                </Button>
              </Box>
              <GenericField
                name="explanation"
                label={formatMessage({ id: 'crm.details.marketing_open_house.explanation' })}
              />
            </AutosaveForm>
          </CardContent>
        </Card>
      </Page>
    </>
  );
};
