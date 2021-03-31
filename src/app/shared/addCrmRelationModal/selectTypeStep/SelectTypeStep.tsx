import React from 'react';
import { Field } from 'react-final-form';
import { useTheme } from '@material-ui/core';

import { requireValidator } from 'form/validators';
import { AddCrmRelationStepProps } from '../AddCrmRelationModal.types';
import { Avatar, Box, DialogContent, Grid } from 'ui/atoms';
import { CrmType } from 'api/types';
import { CrmIcon, RoundBusinessCenterIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { SelectCard } from 'ui/molecules';

import { useStyles } from './SelectTypeStep.styles';

export const SelectTypeStep = ({ handleGoTo }: AddCrmRelationStepProps) => {
  const theme = useTheme();
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const TYPES = [
    {
      type: CrmType.Relation,
      translation: 'relation',
      icon: <CrmIcon color="inherit" />,
      color: theme.palette.orange,
    },
    {
      type: CrmType.Business,
      translation: 'business',
      icon: <RoundBusinessCenterIcon color="inherit" />,
      color: theme.palette.blue,
    },
  ];

  return (
    <Field name="type" validate={requireValidator}>
      {({ input }) => (
        <>
          <DialogContent>
            <Grid container spacing={2}>
              {TYPES.map(t => (
                <Grid xs={12} item key={t.type}>
                  <SelectCard
                    className={classes.selectCard}
                    fullWidth
                    onClick={() => {
                      input.onChange(t.type);
                      handleGoTo(t.type === CrmType.Relation ? 1 : 2);
                    }}
                  >
                    <Avatar variant="rounded" size="small" bgcolor={t.color.light}>
                      <Box color={t.color.main}>{t.icon}</Box>
                    </Avatar>
                    {formatMessage({ id: `dictionaries.crm_type.${t.translation}` })}
                  </SelectCard>
                </Grid>
              ))}
            </Grid>
          </DialogContent>
        </>
      )}
    </Field>
  );
};
