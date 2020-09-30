import React, { useState } from 'react';

import { Card, CardContent, CardHeader, FormControlLabel, Switch, Grid, Typography, Box } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AutosaveForm } from 'ui/organisms';
import { GenericField, RadioGroupField } from 'form/fields';
import { SquareIcon } from 'ui/atoms/icons';

import { useStyles } from './PreferredTitle.styles';

export const PreferredTitle = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);

  const initialValues = {
    prefix: 'dr',
    suffix: 'msc',
    preferredLetterSalutation: 'family',
  };

  const prefixes = [
    {
      label: 'crm.details.personal_information_general.preferred_title.dr',
      icon: <SquareIcon color="inherit" />,
      value: 'dr',
    },
    {
      label: 'crm.details.personal_information_general.preferred_title.mr',
      icon: <SquareIcon color="inherit" />,
      value: 'mr',
    },
    {
      label: 'crm.details.personal_information_general.preferred_title.ir',
      icon: <SquareIcon color="inherit" />,
      value: 'ir',
    },
    {
      label: 'crm.details.personal_information_general.preferred_title.ing',
      icon: <SquareIcon color="inherit" />,
      value: 'ing',
    },
    {
      label: 'crm.details.personal_information_general.preferred_title.drs',
      icon: <SquareIcon color="inherit" />,
      value: 'drs',
    },
  ];

  const suffixes = [
    {
      label: 'crm.details.personal_information_general.preferred_title.msc',
      icon: <SquareIcon color="inherit" />,
      value: 'msc',
    },
    {
      label: 'crm.details.personal_information_general.preferred_title.ma',
      icon: <SquareIcon color="inherit" />,
      value: 'ma',
    },
    {
      label: 'crm.details.personal_information_general.preferred_title.mre',
      icon: <SquareIcon color="inherit" />,
      value: 'mre',
    },
    {
      label: 'crm.details.personal_information_general.preferred_title.mba',
      icon: <SquareIcon color="inherit" />,
      value: 'mba',
    },
    {
      label: 'crm.details.personal_information_general.preferred_title.bc',
      icon: <SquareIcon color="inherit" />,
      value: 'bc',
    },
  ];

  const preferredLetterSalutations = [
    {
      label: 'crm.details.personal_information_general.preferred_title.family',
      icon: <SquareIcon color="inherit" />,
      value: 'family',
    },
    {
      label: 'crm.details.personal_information_general.preferred_title.lord',
      icon: <SquareIcon color="inherit" />,
      value: 'lord',
    },
    {
      label: 'crm.details.personal_information_general.preferred_title.mylady',
      icon: <SquareIcon color="inherit" />,
      value: 'mylady',
    },
    {
      label: 'crm.details.personal_information_general.preferred_title.lord_mylady',
      icon: <SquareIcon color="inherit" />,
      value: 'lord_mylady',
    },
  ];

  const onSave = async (values: unknown) => {
    return { error: false };
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title={formatMessage({ id: 'crm.details.personal_information_general.preferred_title.title' })}
        action={
          <FormControlLabel
            control={<Switch checked={isEditing} onChange={() => setIsEditing(!isEditing)} color="primary" />}
            label={formatMessage({ id: 'form_section.edit_mode' })}
            labelPlacement="start"
          />
        }
      />
      <CardContent>
        <AutosaveForm onSave={onSave} initialValues={initialValues}>
          <Grid item xs={12}>
            <Box className={classes.marginTopFour}>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h3">
                  {formatMessage({ id: 'crm.details.personal_information_general.preferred_title.prefix' })}
                </Typography>
                <Typography variant="h5" className={classes.gray}>
                  {formatMessage({
                    id: 'crm.details.personal_information_general.personal_info.choose_one_option_below',
                  })}
                </Typography>
              </Box>
              <Box display="flex" className={classes.marginTopTwo}>
                <RadioGroupField
                  disabled={!isEditing}
                  name="prefix"
                  options={prefixes}
                  classes={{ groupItem: classes.radioItem }}
                />
              </Box>
            </Box>
            <Box className={classes.marginTopFour}>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h3">
                  {formatMessage({ id: 'crm.details.personal_information_general.preferred_title.suffix' })}
                </Typography>
                <Typography variant="h5" className={classes.gray}>
                  {formatMessage({
                    id: 'crm.details.personal_information_general.personal_info.choose_one_option_below',
                  })}
                </Typography>
              </Box>
              <Box display="flex" className={classes.marginTopTwo}>
                <RadioGroupField
                  disabled={!isEditing}
                  name="suffix"
                  options={suffixes}
                  classes={{ groupItem: classes.radioItem }}
                />
              </Box>
            </Box>
            <Box className={classes.marginTopFour}>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h3">
                  {formatMessage({
                    id: 'crm.details.personal_information_general.preferred_title.preferred_letter_saluation',
                  })}
                </Typography>
                <Typography variant="h5" className={classes.gray}>
                  {formatMessage({
                    id: 'crm.details.personal_information_general.personal_info.choose_one_option_below',
                  })}
                </Typography>
              </Box>
              <Box display="flex" className={classes.marginTopTwo}>
                <RadioGroupField
                  disabled={!isEditing}
                  name="preferredLetterSalutation"
                  options={preferredLetterSalutations}
                  classes={{ groupItem: classes.radioItem }}
                />
              </Box>
            </Box>
            <Box className={classes.marginTopFour}>
              <Typography variant="h5">
                {formatMessage({ id: 'crm.details.personal_information_general.preferred_title.extra_information' })}
              </Typography>
              <GenericField
                className={classes.formField}
                name="extraInformation"
                disabled={!isEditing}
                placeholder="crm.details.personal_information_general.preferred_title.put_extra_information"
              />
            </Box>
          </Grid>
        </AutosaveForm>
      </CardContent>
    </Card>
  );
};
