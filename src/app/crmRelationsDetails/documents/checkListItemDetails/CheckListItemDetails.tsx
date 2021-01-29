import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { DateTime } from 'luxon';

import { CrmRelationsDetailsHeader } from 'app/crmRelationsDetails/crmRelationsDetailsHeader/CrmRelationsDetailsHeader';
import { useLocale } from 'hooks';
import { Box, Chip, Grid, IconButton, Typography } from 'ui/atoms';
import { CheckIcon, MenuIcon, ExitIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';

import { ChecklistItemDetailsProps } from './ChecklistItemDetails.types';
import { useStyles } from './ChecklistItemDetails.styles';

export const CheckListItemDetails = ({
  onSidebarOpen,
  isSidebarVisible,
  path,
  list,
  item,
}: ChecklistItemDetailsProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const { push } = useHistory();
  const { checklistId } = useParams<{ checklistId: string }>();

  return (
    <>
      <CrmRelationsDetailsHeader
        onSidebarOpen={onSidebarOpen}
        isSidebarVisible={isSidebarVisible}
        actions={
          <Box display="flex" alignItems="center">
            <IconButton size="small" variant="rounded">
              <MenuIcon />
            </IconButton>
            <Box ml={2} />
            <IconButton
              size="small"
              variant="rounded"
              className={classes.rotatedButton}
              onClick={() => push(`${path}/${checklistId}`)}
            >
              <ExitIcon />
            </IconButton>
          </Box>
        }
      />
      <Page title={formatMessage({ id: `dictionaries.document_type.${item.type}` })} titleActions={<></>}>
        <Grid xs={12} item>
          <Box display="flex" alignItems="center">
            {list.steps.map((step, index) => (
              <Box display="flex" key={index} mr={7.5}>
                <CheckIcon color="action" className={classes.checkIcon} />
                <Box ml={1} />
                <Box>
                  <Typography variant="h5">
                    {formatMessage({ id: `dictionaries.checklist_step.${step.step}` })}
                  </Typography>
                  <Typography variant="h6">{step.date.toLocaleString(DateTime.DATE_SHORT)}</Typography>
                </Box>
              </Box>
            ))}
            <Chip
              size="small"
              variant="outlined"
              label={formatMessage({ id: `dictionaries.checklist_item_condition.${item.condition}` })}
              className={classes.chip}
            />
          </Box>
          <Box mt={2.5}>
            <iframe
              className={classes.pdfViewer}
              src={'https://pdfjs-express.s3-us-west-2.amazonaws.com/docs/choosing-a-pdf-viewer.pdf'}
              title={'https://pdfjs-express.s3-us-west-2.amazonaws.com/docs/choosing-a-pdf-viewer.pdf'}
            ></iframe>
          </Box>
        </Grid>
      </Page>
    </>
  );
};
