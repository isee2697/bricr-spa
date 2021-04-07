import React, { useState } from 'react';

import { DmsFolderViewType } from 'api/types';
import { Box, IconButton } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';
import { ActionTabs } from 'ui/molecules';
import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';
import { EmptyStateFilter } from 'ui/organisms/emptyStateFilter/EmptyStateFilter';
import { CardWithBody } from 'ui/templates';
import { SurveyItemStatus } from '../../cardItems/surveyItem/SurveyItem.types';
import { SurveyItem } from '../../cardItems/surveyItem/SurveyItem';

import { SurveyTabs } from './dictionary';
import { SurveysProps } from './Surveys.types';

export const Surveys = ({ surveys }: SurveysProps) => {
  const [status, setStatus] = useState<SurveyItemStatus>(SurveyItemStatus.ActionRequired);
  const tabs: ActionTab[] = SurveyTabs.map(tab => ({
    ...tab,
    amount: surveys.filter(survey => survey.status === tab.value).length,
  }));

  return (
    <CardWithBody
      titleId="dms.invoices.title"
      titleActions={
        <IconButton color="primary" size="small" variant="circle">
          <AddIcon />
        </IconButton>
      }
    >
      <ActionTabs tabs={tabs} status={status} onStatusChange={setStatus} />
      <Box>
        {surveys.filter(survey => survey.status === status).length === 0 && (
          <EmptyStateFilter type={DmsFolderViewType.Surveys} />
        )}
        {surveys
          .filter(survey => survey.status === status)
          .map((survey, index) => (
            <Box mb={2}>
              <SurveyItem key={index} item={survey} />
            </Box>
          ))}
      </Box>
    </CardWithBody>
  );
};
