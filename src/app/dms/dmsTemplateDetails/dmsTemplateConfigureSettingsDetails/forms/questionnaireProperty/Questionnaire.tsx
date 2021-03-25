import React from 'react';

import { useLocale, useModalDispatch, useModalState } from 'hooks';
import { Card, CardContent, Typography } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';
import { InfoSection } from 'ui/molecules';
import { Page } from 'ui/templates';

import { QuestionnaireProps } from './Questionnaire.types';
import { AddQuestionnaireGroupModal } from './addQuestionnaireGroupModal/AddQuestionnaireGroupModal';
import { QuestionnaireItem } from './questionnaireItem/QuestionnaireItem';

export const Questionnaire = ({ template, groups, onAddQuestionnaireGroup }: QuestionnaireProps) => {
  const { formatMessage } = useLocale();
  const { open, close } = useModalDispatch();
  const { isOpen: isModalOpen } = useModalState('add-questionnaire-group');

  return (
    <Page
      showHeader
      title={template.templateName}
      titleActions={[]}
      headerProps={{
        actionIcon: <AddIcon color="inherit" />,
        actionText: formatMessage({ id: 'dms.templates.add_questionnaire_group' }),
        onAction: () => open('add-questionnaire-group'),
      }}
    >
      {groups.map((group, index) => (
        <QuestionnaireItem key={index} group={group} />
      ))}
      {groups.length === 0 && (
        <Card>
          <CardContent>
            <InfoSection emoji="🤔">
              <Typography variant="h3">{formatMessage({ id: 'dms.templates.questionnaire.empty.title' })}</Typography>
              <Typography variant="h3">
                {formatMessage({ id: 'dms.templates.questionnaire.empty.description' })}
              </Typography>
            </InfoSection>
          </CardContent>
        </Card>
      )}
      <AddQuestionnaireGroupModal
        isOpened={isModalOpen}
        onClose={() => close('add-questionnaire-group')}
        onSubmit={onAddQuestionnaireGroup}
      />
    </Page>
  );
};
