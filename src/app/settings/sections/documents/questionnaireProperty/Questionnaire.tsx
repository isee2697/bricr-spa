import React from 'react';

import { useLocale, useModalDispatch, useModalState } from 'hooks';
import { Box, Button, Card, CardContent, Typography } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';
import { InfoSection } from 'ui/molecules';

import { useStyles } from './Questionnaire.styles';
import { QuestionnaireProps } from './Questionnaire.types';
import { AddQuestionnaireGroupModal } from './addQuestionnaireGroupModal/AddQuestionnaireGroupModal';
import { QuestionnaireItem } from './questionnaireItem/QuestionnaireItem';

export const Questionnaire = ({ groups, onAddQuestionnaireGroup }: QuestionnaireProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { open, close } = useModalDispatch();
  const { isOpen: isModalOpen } = useModalState('add-questionnaire-group');

  return (
    <>
      <Box mb={2} display="flex" alignItems="center" justifyContent="space-between">
        <Box>
          <Typography variant="h3" className={classes.fontWeightBold}>
            {formatMessage({ id: 'settings.documents.questionnaire.title' })}
          </Typography>
          <Box mt={3}>
            <Typography variant="h3">{formatMessage({ id: 'settings.documents.questionnaire.sub_title' })}</Typography>
          </Box>
        </Box>
        <Button
          color="primary"
          variant="contained"
          startIcon={<AddIcon color="inherit" />}
          onClick={() => open('add-questionnaire-group')}
        >
          {formatMessage({ id: 'settings.documents.questionnaire.add_questionnaire_group' })}
        </Button>
      </Box>
      {groups.map((group, index) => (
        <QuestionnaireItem key={index} group={group} />
      ))}
      {groups.length === 0 && (
        <Card>
          <CardContent>
            <InfoSection emoji="🤔">
              <Typography variant="h3">
                {formatMessage({ id: 'settings.documents.questionnaire.empty.title' })}
              </Typography>
              <Typography variant="h3">
                {formatMessage({ id: 'settings.documents.questionnaire.empty.description' })}
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
    </>
  );
};
