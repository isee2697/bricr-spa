import React, { useState } from 'react';
import arrayMutators from 'final-form-arrays';
import { useParams } from 'react-router-dom';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Box, Card, CardContent, CardHeader, FormControlLabel, Grid, Switch, TileCheckbox, Typography } from 'ui/atoms';
import { AddCustomPropertyModalContainer, AutosaveForm } from 'ui/organisms';
import { CheckboxGroupField, DatePickerField, GenericField, RadioGroupField } from 'form/fields';
import { AddIcon, EuroIcon } from 'ui/atoms/icons';
import { useEntityType } from 'app/shared/entityType';
import { LabelProperty } from 'api/types';
import { useCustomLabels } from 'hooks';

import { useStyles } from './CurrentSituation.styles';
import { currentHomes1, currentHomes2, reasonToMove } from './dictionaries';
import { CurrentSituationProps } from './CurrentSituation.types';

export const CurrentSituation = ({ data, onSave }: CurrentSituationProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);
  const [addReasonToMove, showAddReasonToMove] = useState(false);
  const { entityType } = useEntityType();
  const { id } = useParams<{ id: string }>();

  const customReasons = useCustomLabels(id, [LabelProperty.ReasonToMove], entityType);

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          title={formatMessage({ id: 'crm.details.personal_information_home_situation.current_situation.title' })}
          action={
            <FormControlLabel
              control={<Switch checked={isEditing} onChange={() => setIsEditing(!isEditing)} color="primary" />}
              label={formatMessage({ id: 'form_section.edit_mode' })}
              labelPlacement="start"
            />
          }
        />
        <CardContent>
          <AutosaveForm onSave={onSave} initialValues={data} mutators={{ ...arrayMutators }}>
            <Grid item xs={12}>
              <Box className={classes.marginTopFour}>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="h3">
                    {formatMessage({
                      id: 'crm.details.personal_information_home_situation.current_situation.current_home',
                    })}
                  </Typography>
                  <Typography variant="h5" className={classes.gray}>
                    {formatMessage({
                      id: 'common.choose_one_option_below',
                    })}
                  </Typography>
                </Box>
                <Box className={classes.marginTopTwo}>
                  <RadioGroupField
                    disabled={!isEditing}
                    name="currentHomeSituation"
                    options={currentHomes1}
                    classes={{ groupItem: classes.radioItem }}
                  />
                </Box>
              </Box>
              <Box className={classes.marginTopFour}>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="h3">
                    {formatMessage({
                      id: 'crm.details.personal_information_home_situation.current_situation.current_home',
                    })}
                  </Typography>
                  <Typography variant="h5" className={classes.gray}>
                    {formatMessage({
                      id: 'common.choose_one_option_below',
                    })}
                  </Typography>
                </Box>
                <Box className={classes.marginTopTwo}>
                  <RadioGroupField
                    disabled={!isEditing}
                    name="currentHomeStatus"
                    options={currentHomes2}
                    classes={{ groupItem: classes.radioItem }}
                  />
                </Box>
              </Box>
              <Grid container spacing={1} className={classes.marginTopFour}>
                <Grid item xs={4}>
                  <Typography variant="h5">
                    {formatMessage({
                      id: 'crm.details.personal_information_home_situation.current_situation.estimated_sales_value',
                    })}
                  </Typography>
                  <GenericField
                    name="currentHomeSalesValue"
                    type="number"
                    InputProps={{ endAdornment: <EuroIcon /> }}
                    disabled={!isEditing}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h5">
                    {formatMessage({
                      id: 'crm.details.personal_information_home_situation.current_situation.mortgage',
                    })}
                  </Typography>
                  <GenericField
                    name="currentHomeMortgage"
                    type="number"
                    InputProps={{ endAdornment: <EuroIcon /> }}
                    disabled={!isEditing}
                  />
                </Grid>
              </Grid>
              <Box className={classes.marginTopFour}>
                <Typography variant="h5">
                  {formatMessage({
                    id: 'crm.details.personal_information_home_situation.current_situation.extra_information',
                  })}
                </Typography>
                <GenericField
                  name="currentHomeInformation"
                  disabled={!isEditing}
                  placeholder="common.put_information_here"
                />
              </Box>
            </Grid>
            <Grid className={classes.marginTopFour}>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h3">
                  {formatMessage({
                    id: 'crm.details.personal_information_home_situation.current_situation.reason_to_move',
                  })}
                </Typography>
                <Typography variant="h5" className={classes.gray}>
                  {formatMessage({
                    id: 'common.choose_one_option_below',
                  })}
                </Typography>
              </Box>
              <Box className={classes.marginTopTwo}>
                <CheckboxGroupField
                  xs={2}
                  name="reasonToMove"
                  options={[
                    ...reasonToMove,
                    ...(customReasons[LabelProperty.ReasonToMove]?.map(label => ({
                      label: label.label,
                      icon: label.icon,
                      value: label.value,
                      isCustom: label.isCustom,
                    })) ?? []),
                  ]}
                  disabled={!isEditing}
                  actionElement={
                    <TileCheckbox
                      onClick={() => showAddReasonToMove(true)}
                      isSelected={false}
                      title={formatMessage({ id: 'crm.details.reason_to_move.add_extra_reason' })}
                      isDisabled={!isEditing}
                    >
                      <AddIcon />
                    </TileCheckbox>
                  }
                />
              </Box>
              <Grid container className={classes.marginTopFour}>
                <Grid item xs={4}>
                  <Typography variant="h5">
                    {formatMessage({
                      id: 'crm.details.personal_information_home_situation.current_situation.date_of_moving',
                    })}
                  </Typography>
                  <DatePickerField placeholder="date_picker.aria_label" name="movingDate" disabled={!isEditing} />
                </Grid>
              </Grid>
              <Box className={classes.marginTopFour}>
                <Typography variant="h5">
                  {formatMessage({
                    id: 'crm.details.personal_information_home_situation.current_situation.extra_information',
                  })}
                </Typography>
                <GenericField
                  name="movingInformation"
                  disabled={!isEditing}
                  placeholder="common.put_information_here"
                />
              </Box>
            </Grid>
          </AutosaveForm>
        </CardContent>
      </Card>

      {addReasonToMove && (
        <AddCustomPropertyModalContainer
          property={LabelProperty.ReasonToMove}
          isOpened={addReasonToMove}
          onClose={() => showAddReasonToMove(false)}
          entityType={entityType}
          title={formatMessage({
            id: 'crm.details.personal_information_home_situation.current_situation.add_extra_reason',
          })}
        />
      )}
    </>
  );
};
