import React, { useState } from 'react';
import { DateTime } from 'luxon';

import { Box, FormControlLabel, Checkbox, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { HistoryIcon } from 'ui/atoms/icons';

import { useStyles } from './DocumentListOfCaseCommon.styles';
import { DocumentGeneralForm } from './forms/DocumentGeneralForm';
import { DocumentNotesForm } from './forms/DocumentNotesForm';
import { DocumentForm } from './forms/DocumentForm';
import { DocumentListOfCaseCommonProps } from './DocumentListOfCaseCommon.types';

export const DocumentListOfCaseCommon = ({
  cards,
  isSidebarVisible,
  onChangeOrder,
  onDeleteCard,
  onDeleteItem,
}: DocumentListOfCaseCommonProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [allOpened, setAllOpened] = useState(false);

  const createdAt = new Date(2020, 12, 25, 16, 53);
  const owner = 'Christian van Gils';

  const handleUpdateOrder = (cardId: number, dragItemId: number, targetId: number) => {
    onChangeOrder(cardId, dragItemId, targetId);
  };

  const handleDeleteCard = (cardId: number, deleteItemId: number) => {
    onDeleteItem(cardId, deleteItemId);
  };

  return (
    <Box display="flex" flexDirection="column" width="100%">
      <Box>
        <DocumentGeneralForm />
      </Box>
      <Box mt={2.5}>
        <DocumentNotesForm isSidebarVisible={isSidebarVisible} />
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
        <Box mt={2.5} key={index} style={{ position: 'relative' }}>
          <DocumentForm
            card={card}
            isSidebarVisible={isSidebarVisible}
            onChangeOrder={(dragItemId: number, targetId: number) => handleUpdateOrder(card.id, dragItemId, targetId)}
            onDeleteCard={onDeleteCard}
            onDeleteItem={(deleteItemId: number) => handleDeleteCard(card.id, deleteItemId)}
          />
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
