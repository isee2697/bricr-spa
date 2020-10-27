import React, { useState } from 'react';
import arrayMutators from 'final-form-arrays';

import { useLocale } from 'hooks';
import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';
import { Badge, Card, CardContent, CardHeader, FormControlLabel, Grid, IconButton, Switch, Typography } from 'ui/atoms';
import { AutosaveForm } from 'ui/organisms';
import { RadioGroupField } from 'form/fields';
import { AddIcon } from 'ui/atoms/icons';

import { useStyles } from './Extras.styles';
import { desirableExtra, notSignificantExtra, requiredExtra } from './dictionaries';

export const Extras = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);

  const requiredExtras: RadioDataType[] = requiredExtra.map(item => ({
    label: formatMessage({ id: item.label }),
    value: item.value,
  }));

  const desirableExtras: RadioDataType[] = desirableExtra.map(item => ({
    label: formatMessage({ id: item.label }),
    value: item.value,
  }));

  const notSignificantExtras: RadioDataType[] = notSignificantExtra.map(item => ({
    label: formatMessage({ id: item.label }),
    value: item.value,
  }));

  const onSave = async () => {
    return undefined;
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title={formatMessage({ id: 'crm.details.personal_information_match_profile.extras.title' })}
        action={
          <>
            <FormControlLabel
              control={<Switch checked={isEditing} onChange={() => setIsEditing(!isEditing)} color="primary" />}
              label={formatMessage({ id: 'form_section.edit_mode' })}
              labelPlacement="start"
              className={classes.editSwitcher}
            />
            <IconButton aria-label="add" color="primary" size="small" onClick={() => {}}>
              <AddIcon color="inherit" />
            </IconButton>
          </>
        }
      />
      <CardContent>
        <AutosaveForm onSave={onSave} mutators={{ ...arrayMutators }}>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <Badge badgeContent={7} className={classes.badge}>
                  <Typography variant="h3">
                    {formatMessage({ id: 'crm.details.personal_information_match_profile.extras.requires' })}
                  </Typography>
                </Badge>
                <RadioGroupField
                  xs={12}
                  name="requiredExtra"
                  options={requiredExtras}
                  disabled={!isEditing}
                  classes={{ group: classes.extraRadioGroup, groupItem: classes.extraRadioGroupItem }}
                />
              </Grid>
              <Grid item xs={4}>
                <Badge badgeContent={7} className={classes.badge}>
                  <Typography variant="h3">
                    {formatMessage({ id: 'crm.details.personal_information_match_profile.extras.desirable' })}
                  </Typography>
                </Badge>
                <RadioGroupField
                  xs={12}
                  name="desirableExtra"
                  options={desirableExtras}
                  disabled={!isEditing}
                  classes={{ group: classes.extraRadioGroup, groupItem: classes.extraRadioGroupItem }}
                />
              </Grid>
              <Grid item xs={4}>
                <Badge badgeContent={7} className={classes.badge}>
                  <Typography variant="h3">
                    {formatMessage({ id: 'crm.details.personal_information_match_profile.extras.not_significant' })}
                  </Typography>
                </Badge>
                <RadioGroupField
                  xs={12}
                  name="notSignificantExtra"
                  options={notSignificantExtras}
                  disabled={!isEditing}
                  classes={{ group: classes.extraRadioGroup, groupItem: classes.extraRadioGroupItem }}
                />
              </Grid>
            </Grid>
          </Grid>
        </AutosaveForm>
      </CardContent>
    </Card>
  );
};
