import React, { useState } from 'react';
import { DateTime } from 'luxon';

import { Box, FormControlLabel, Checkbox, Typography, Grid } from 'ui/atoms';
import { useLocale } from 'hooks';
import { HistoryIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';
import { DocumentQuestionKind } from '../DocumentQuestionnaire.types';

import { useStyles } from './DocumentQuestionnaireFlow.styles';
import { QuestionGeneralForm } from './forms/QuestionGeneralForm';
import { QuestionNotesForm } from './forms/QuestionNotesForm';
import { DocumentQuestionnaireFlowProps } from './DocumentQuestionnaireFlow.types';
import { QuestionYesNoForm } from './forms/QuestionYesNoForm';
import { QuestionMultiChoiceForm } from './forms/QuestionMultiChoiceForm';
import { QuestionNoteOnlyForm } from './forms/QuestionNoteOnlyForm';

export const DocumentQuestionnaireFlow = ({ documentKind, stepInfo, stepIndex }: DocumentQuestionnaireFlowProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [allOpened, setAllOpened] = useState(false);

  const modifiedAt = stepInfo.modifiedAt ? new Date(stepInfo.modifiedAt) : '';
  const owner = 'Christian van Gils';

  return (
    <Page withoutHeader>
      <Grid xs={12} item>
        <Box display="flex" alignItems="center">
          <Typography variant="h1">
            {stepIndex === 0 ? formatMessage({ id: `pim_details.documents.${documentKind}` }) : stepInfo.title}
          </Typography>
        </Box>
      </Grid>
      <Box mt={3} width="100%">
        <Box display="flex" flexDirection="column" width="100%">
          {stepIndex === 0 ? (
            <>
              <Box>
                <QuestionGeneralForm documentKind={documentKind} />
              </Box>
              <Box mt={2.5}>
                <QuestionNotesForm />
              </Box>
            </>
          ) : (
            <>
              <Box>
                <FormControlLabel
                  control={<Checkbox checked={allOpened} onChange={() => setAllOpened(!allOpened)} color="primary" />}
                  label={
                    <Typography variant="h5" className={classes.grayText}>
                      {formatMessage({ id: 'pim_details.documents.open_all_card' })}
                    </Typography>
                  }
                />
              </Box>
              {stepInfo.questions?.map((question, index) => (
                <Box mt={2.5} key={index}>
                  {question.type === DocumentQuestionKind.YesNo && (
                    <QuestionYesNoForm
                      title={question.title}
                      subtitle={question.subtitle}
                      question={question.question}
                      documentKind={documentKind}
                      initOpened={index === 0}
                    />
                  )}
                  {question.type === DocumentQuestionKind.YesNoWithNote && (
                    <QuestionYesNoForm
                      title={question.title}
                      subtitle={question.subtitle}
                      question={question.question}
                      documentKind={documentKind}
                      isNote
                      initOpened={index === 0}
                    />
                  )}
                  {question.type === DocumentQuestionKind.MultiChoice && (
                    <QuestionMultiChoiceForm
                      title={question.title}
                      subtitle={question.subtitle}
                      question={question.question}
                      documentKind={documentKind}
                      initOpened={index === 0}
                    />
                  )}
                  {question.type === DocumentQuestionKind.MultiChoiceWithNote && (
                    <QuestionMultiChoiceForm
                      title={question.title}
                      subtitle={question.subtitle}
                      question={question.question}
                      documentKind={documentKind}
                      isNote
                      initOpened={index === 0}
                    />
                  )}
                  {question.type === DocumentQuestionKind.NoteOnly && (
                    <QuestionNoteOnlyForm
                      title={question.title}
                      subtitle={question.subtitle}
                      question={question.question}
                      documentKind={documentKind}
                      initOpened={index === 0}
                    />
                  )}
                </Box>
              ))}
            </>
          )}
          <Box mt={7} display="flex" alignItems="center" justifyContent="space-between">
            <Typography variant="h5" className={classes.grayText}>
              {modifiedAt && (
                <>
                  {formatMessage({ id: 'common.last_updated' })}:{' '}
                  <Typography component="span" variant="h5" className={classes.boldText}>
                    {DateTime.fromJSDate(modifiedAt).toFormat('dd-MM-yyyy HH:mm')} by {owner}
                  </Typography>
                </>
              )}
            </Typography>
            <Typography variant="h5" className={classes.grayText}>
              <HistoryIcon />
            </Typography>
          </Box>
        </Box>
      </Box>
    </Page>
  );
};
