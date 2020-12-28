import React from 'react';
import { DateTime } from 'luxon';
import withStyles from '@material-ui/core/styles/withStyles';
import clsx from 'classnames';

import { useLocale } from 'hooks';
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  Step,
  Stepper,
  Box,
  StepConnector,
  StepLabel,
  Chip,
} from 'ui/atoms';
import { CloseIcon, CheckIcon } from 'ui/atoms/icons';

import { Document, DocumentCondition, DocumentRequestStatus, DocumentType } from './Documents.types';
import { useStyles } from './Documents.styles';

const StatusStepConnector = withStyles(theme => ({
  alternativeLabel: {
    left: `calc(-100% + ${theme.spacing(3)}px)`,
    right: '100%',
  },
  active: {
    '& $line': {
      background: theme.palette.green.main,
    },
  },
  completed: {
    '& $line': {
      background: theme.palette.green.main,
    },
  },
  line: {
    background: theme.palette.gray.light,
    borderTopWidth: 0,
    minHeight: 2,
    height: 2,
  },
}))(StepConnector);

export const Documents = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const documents: Document[] = [
    {
      id: '0001',
      type: DocumentType.AnnualStatementLastYear,
      steps: [
        {
          status: 'completed',
          step: DocumentRequestStatus.Request,
          date: DateTime.local(),
        },
        {
          status: 'rejected',
          step: DocumentRequestStatus.Uploaded,
          date: DateTime.local(),
        },
        {
          status: 'inactive',
          step: DocumentRequestStatus.Accepted,
          date: DateTime.local(),
        },
      ],
      condition: DocumentCondition.Mandatory,
      document: {
        name: 'choosing-a-pdf.pdf',
        url: 'https://pdfjs-express.s3-us-west-2.amazonaws.com/docs/choosing-a-pdf-viewer.pdf',
      },
    },
    {
      id: '0002',
      type: DocumentType.AnnualStatementLastYear,
      steps: [
        {
          status: 'completed',
          step: DocumentRequestStatus.Request,
          date: DateTime.local(),
        },
        {
          status: 'completed',
          step: DocumentRequestStatus.Uploaded,
          date: DateTime.local(),
        },
        {
          status: 'rejected',
          step: DocumentRequestStatus.Accepted,
          date: DateTime.local(),
        },
      ],
      condition: DocumentCondition.Mandatory,
      document: {
        name: 'choosing-a-pdf.pdf',
        url: 'https://pdfjs-express.s3-us-west-2.amazonaws.com/docs/choosing-a-pdf-viewer.pdf',
      },
    },
    {
      id: '0003',
      type: DocumentType.AnnualStatementLastYear,
      steps: [
        {
          status: 'completed',
          step: DocumentRequestStatus.Request,
          date: DateTime.local(),
        },
        {
          status: 'completed',
          step: DocumentRequestStatus.Uploaded,
          date: DateTime.local(),
        },
        {
          status: 'completed',
          step: DocumentRequestStatus.Accepted,
          date: DateTime.local(),
        },
      ],
      condition: DocumentCondition.Mandatory,
      document: {
        name: 'choosing-a-pdf.pdf',
        url: 'https://pdfjs-express.s3-us-west-2.amazonaws.com/docs/choosing-a-pdf-viewer.pdf',
      },
    },
  ];

  return (
    <Card>
      <CardHeader title={formatMessage({ id: 'pim_details.summary.audit_checklist.documents.title' })} />
      <CardContent>
        <Grid container>
          <Grid item xs={4}>
            <Typography variant="h5" color="textSecondary">
              {formatMessage({ id: 'pim_details.summary.audit_checklist.documents.document_type' })}
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Box display="flex" alignItems="center">
              <Box>
                <Typography variant="h5" color="textSecondary">
                  {formatMessage({ id: 'pim_details.summary.audit_checklist.documents.requested' })}
                </Typography>
              </Box>
              <Box>
                <Typography variant="h5" color="textSecondary">
                  {formatMessage({ id: 'pim_details.summary.audit_checklist.documents.uploaded' })}
                </Typography>
              </Box>
              <Box>
                <Typography variant="h5" color="textSecondary">
                  {formatMessage({ id: 'pim_details.summary.audit_checklist.documents.accepted' })}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3} />
        </Grid>
        {documents.map((document, index) => (
          <Box mt={1} key={index}>
            <Grid container>
              <Grid item xs={4}>
                <Typography variant="h5">
                  {formatMessage({
                    id: `pim_details.summary.audit_checklist.documents.document_type.${document.type}`,
                  })}
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Stepper
                  variant="elevation"
                  alternativeLabel
                  nonLinear
                  connector={<StatusStepConnector />}
                  className={classes.stepper}
                >
                  {document.steps.map((step, stepIndex) => (
                    <Step key={stepIndex} className={clsx(classes.step, step.status)}>
                      <StepLabel
                        className={clsx(classes.stepLabel, step.status)}
                        StepIconComponent={() => {
                          if (step.status === 'rejected') {
                            return <CloseIcon color="error" className={clsx(classes.stepIcon, step.status)} />;
                          } else if (step.status === 'completed') {
                            return <CheckIcon color="action" className={clsx(classes.stepIcon, step.status)} />;
                          } else {
                            return <CloseIcon color="error" className={clsx(classes.stepIcon, step.status)} />;
                          }
                        }}
                      >
                        {step.status === 'completed' && step.date ? step.date.toLocaleString(DateTime.DATE_MED) : ''}
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Grid>
              <Grid item xs={3}>
                <Chip
                  size="small"
                  variant="outlined"
                  label={formatMessage({
                    id: 'pim_details.summary.audit_checklist.documents.mandatory',
                  })}
                />
              </Grid>
            </Grid>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};
