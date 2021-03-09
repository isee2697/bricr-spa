import { IHeaderOverride } from 'react-doc-viewer';
import React from 'react';
import { IMainState } from 'react-doc-viewer/build/state/reducer';

import { Grid, IconButton, Typography } from 'ui/atoms/index';
import { ArrowLeftIcon, ArrowRightIcon } from 'ui/atoms/icons';
import { useStyles } from 'ui/atoms/documentViewer/DocumentView.styles';
import { useLocale } from 'hooks';

import { DocumentViewHeaderTypes } from './DocumentView.types';

export const DocumentViewerHeader = ({ state, previousDocument, nextDocument }: DocumentViewHeaderTypes) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  let title = '';
  const amount = state.documents.length;

  if (!state.config?.header?.disableFileName && !!state?.currentDocument?.uri) {
    const parts = state.currentDocument.uri.split('/');

    title = parts[parts.length - 1];
  }

  return (
    <Grid container className={classes.header}>
      <Grid item>
        <Typography variant="h2">{title}</Typography>
      </Grid>
      {amount > 1 && (
        <Grid item className={classes.buttonsRight}>
          <Typography variant="h3">{`${state.currentFileNo + 1}  ${formatMessage({
            id: 'common.number.of',
          })}  ${amount}`}</Typography>
          <IconButton
            data-testid="document-viewer-previous-button"
            disabled={state.currentFileNo === 0}
            variant="rounded"
            size="small"
            onClick={previousDocument}
          >
            <ArrowLeftIcon />
          </IconButton>
          <IconButton
            data-testid={'document-viewer-next-button'}
            disabled={state.currentFileNo >= amount - 1}
            variant="rounded"
            size="small"
            onClick={nextDocument}
          >
            <ArrowRightIcon />
          </IconButton>
        </Grid>
      )}
    </Grid>
  );
};

export const DocumentViewerHeaderOverride: IHeaderOverride = (state, previousDocument, nextDocument) => (
  <DocumentViewerHeader state={state} previousDocument={previousDocument} nextDocument={nextDocument} />
);
