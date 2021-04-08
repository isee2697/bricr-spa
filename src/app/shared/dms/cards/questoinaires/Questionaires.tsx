import React, { useState } from 'react';

import { CrmStatus, DmsFolderViewType } from 'api/types';
import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';
import { CardWithBody } from 'ui/templates';
import { Box, IconButton } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';
import { ActionTabs } from 'ui/molecules';
import { EmptyStateFilter } from 'ui/organisms/emptyStateFilter/EmptyStateFilter';
import { QuestionairesItem } from '../../cardItems/questionaireItem/QuestionairesItem';

import { QuestionairesProps } from './Questionaires.types';
import { QuestionaireTabs } from './dictionary';

export const Questionaires = ({ questionaires }: QuestionairesProps) => {
  const [status, setStatus] = useState<CrmStatus>(CrmStatus.ActionRequired);
  const tabs: ActionTab[] = QuestionaireTabs.map(tab => ({
    ...tab,
    amount: questionaires.filter(questionaire => questionaire.status === tab.value).length,
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
        {questionaires.filter(questionaire => questionaire.status === status).length === 0 && (
          <EmptyStateFilter type={DmsFolderViewType.Questionaires} />
        )}
        {questionaires
          .filter(questionaire => questionaire.status === status)
          .map((questionaire, index) => (
            <Box mb={2}>
              <QuestionairesItem key={index} item={questionaire} />
            </Box>
          ))}
      </Box>
    </CardWithBody>
  );
};
