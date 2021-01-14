import React, { useState } from 'react';
import { DateTime } from 'luxon';

import { Box, FormControlLabel, Checkbox, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { HistoryIcon } from 'ui/atoms/icons';
import { DocumentListOfCaseCard } from '../DocumentListOfCase.types';

import { useStyles } from './DocumentListOfCaseCommon.styles';
import { DocumentGeneralForm } from './forms/DocumentGeneralForm';
import { DocumentNotesForm } from './forms/DocumentNotesForm';
import { DocumentForm } from './forms/DocumentForm';

export const DocumentListOfCaseCommon = ({ cards }: { cards: DocumentListOfCaseCard[] }) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [allOpened, setAllOpened] = useState(false);

  const createdAt = new Date(2020, 12, 25, 16, 53);
  const owner = 'Christian van Gils';

  return (
    <Box display="flex" flexDirection="column" width="100%">
      <Box>
        <DocumentGeneralForm />
      </Box>
      <Box mt={2.5}>
        <DocumentNotesForm />
      </Box>
      <Box mt={3} ml={2}>
        <FormControlLabel
          control={<Checkbox checked={allOpened} onChange={() => setAllOpened(!allOpened)} color="primary" />}
          label={
            <Typography variant="h5" className={classes.grayText}>
              {formatMessage({ id: 'pim_details.documents.open_all_card' })}
            </Typography>
          }
        />
      </Box>
      {cards.map((card, index) => (
        <Box mt={2.5} key={index}>
          <DocumentForm card={card} />
        </Box>
      ))}
      <Box mt={7} display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h5" className={classes.grayText}>
          {formatMessage({ id: 'common.last_updated' })}:{' '}
          <Typography component="span" variant="h5" className={classes.boldText}>
            {DateTime.fromJSDate(createdAt).toFormat('dd-MM-yyyy HH:mm')} by {owner}
          </Typography>
        </Typography>
        <Typography variant="h5" className={classes.grayText}>
          <HistoryIcon />
        </Typography>
      </Box>
    </Box>
  );
};
