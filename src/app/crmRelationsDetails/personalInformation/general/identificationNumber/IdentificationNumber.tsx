import React, { useState } from 'react';
import * as uuid from 'uuid';

import { Box, Card, CardContent, CardHeader, FormControlLabel, Grid, IconButton, Switch, Typography } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AutosaveForm, FormSubSection } from 'ui/organisms';
import { AddIcon } from 'ui/atoms/icons';
import { InfoSection, TileButton } from 'ui/molecules';
import { useModalDispatch, useModalState } from 'hooks';
import { AddNewIdentificationNumberModal } from '../addNewIdentificationNumberModal/AddNewIdentificationNumberModal';
import { AddNewIdentificationNumberBody } from '../addNewIdentificationNumberModal/AddNewIdentificationNumberModal.types';
import { PromiseFunction } from 'app/shared/types';
import { GenericField, RadioGroupField } from 'form/fields';

import { IdentificationNumberItem, IdentificationNumberProps } from './IdentificationNumber.types';
import { useStyles } from './IdentificationNumber.styles';
import { idNumberTypes } from './dictionaries';

export const IdentificationNumber = ({ data, onSave }: IdentificationNumberProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { open, close } = useModalDispatch();
  const { isOpen } = useModalState('add-new-crm-identification-number');
  const [isEditing, setIsEditing] = useState(false);
  const [identificationNumbers, setidentificationNumbers] = useState<IdentificationNumberItem[]>(
    (data.identificationNumbers || []).map(identificationNumber => ({ ...identificationNumber, key: uuid.v4() })),
  );
  const [loading, setLoading] = useState(false);

  const initialValues = identificationNumbers.reduce((accu, currentValue) => {
    return {
      ...accu,
      [currentValue.key]: {
        ...currentValue,
      },
    };
  }, {});

  const handleAddNewIdentificationNumber: PromiseFunction<AddNewIdentificationNumberBody> = async ({ type }) => {
    try {
      setLoading(true);
      await onSave({
        identificationNumbers: [
          ...(data.identificationNumbers ?? []).map(number => ({
            type: number.type,
            number: number.number,
            name: number.name,
          })),
          {
            type,
          },
        ],
      });

      setidentificationNumbers([
        ...identificationNumbers,
        {
          key: uuid.v4(),
          type,
        },
      ]);

      setLoading(false);

      close('add-new-crm-identification-number');

      return undefined;
    } catch (error) {
      return {
        error: true,
      };
    }
  };

  const handleSave = async (values: Record<string, IdentificationNumberItem>) => {
    const removeKeyAndAddType = (key: string, value: IdentificationNumberItem) => {
      const { key: myKey, ...rest } = value;

      return {
        ...rest,
        type: identificationNumbers.find(identificationNumber => identificationNumber.key === key)?.type,
      };
    };

    const newData = {
      identificationNumbers: Object.entries(values).map(([key, value]) => removeKeyAndAddType(key, value)),
    };

    return await onSave(newData);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title={formatMessage({ id: 'crm.details.personal_information_general.identification_number.title' })}
        action={
          <>
            <FormControlLabel
              control={<Switch checked={isEditing} onChange={() => setIsEditing(!isEditing)} color="primary" />}
              label={formatMessage({ id: 'form_section.edit_mode' })}
              labelPlacement="start"
              className={classes.editSwitcher}
            />
            <IconButton
              aria-label="add"
              color="primary"
              size="small"
              onClick={() => open('add-new-crm-identification-number')}
            >
              <AddIcon color="inherit" />
            </IconButton>
          </>
        }
      />
      <CardContent>
        <AutosaveForm onSave={handleSave} initialValues={initialValues} initialValuesEqual={() => !loading}>
          <Grid item xs={12}>
            {identificationNumbers.length === 0 && (
              <InfoSection emoji="🛰">
                <Typography variant="h3">
                  {formatMessage({ id: 'crm.details.personal_information_general.identification_number.empty_title' })}
                </Typography>
                <Typography variant="h3">
                  {formatMessage({
                    id: 'crm.details.personal_information_general.identification_number.empty_description',
                  })}
                </Typography>
              </InfoSection>
            )}
            {identificationNumbers.length > 0 &&
              identificationNumbers.map((identificationNumber, index) => (
                <FormSubSection
                  key={index}
                  title={
                    <>
                      <Typography variant="h5" className={classes.identificationNumberIndex}>
                        {index + 1}
                      </Typography>
                      <Typography variant="h3" className={classes.identificationNumberTitle}>
                        {formatMessage({
                          id: `dictionaries.personal_information_general.identification_number_type.${identificationNumber.type}`,
                        })}
                      </Typography>
                    </>
                  }
                  onOptionsClick={() => {}}
                >
                  <Grid container spacing={1} className={classes.identificationNumberFormFields}>
                    <Grid item xs={4}>
                      <GenericField
                        name={`${identificationNumber.key}.number`}
                        disabled={!isEditing}
                        label={formatMessage({
                          id: 'crm.details.personal_information_general.identification_number.number',
                        })}
                        placeholder="crm.details.personal_information_general.identification_number.number_placeholder"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <GenericField
                        name={`${identificationNumber.key}.name`}
                        disabled={!isEditing}
                        label={formatMessage({
                          id: 'crm.details.personal_information_general.identification_number.name',
                        })}
                        placeholder="crm.details.personal_information_general.identification_number.name_placeholder"
                      />
                    </Grid>
                  </Grid>
                  <Box mt={4}>
                    <Box display="flex" justifyContent="space-between">
                      <Typography variant="h3">
                        {formatMessage({
                          id:
                            'crm.details.personal_information_general.identification_number.type_of_identification_number',
                        })}
                      </Typography>
                      <Typography variant="h5" className={classes.gray}>
                        {formatMessage({
                          id: 'common.choose_one_option_below',
                        })}
                      </Typography>
                    </Box>
                    <Box mt={2}>
                      <RadioGroupField
                        disabled={!isEditing}
                        name={`${identificationNumber.key}.type`}
                        options={idNumberTypes}
                        actionElement={<TileButton onClick={() => {}} />}
                        classes={{ groupItem: classes.radioItem }}
                      />
                    </Box>
                  </Box>
                </FormSubSection>
              ))}
          </Grid>
        </AutosaveForm>
        <AddNewIdentificationNumberModal
          onSubmit={handleAddNewIdentificationNumber}
          isOpened={isOpen}
          onClose={() => close('add-new-crm-identification-number')}
        />
      </CardContent>
    </Card>
  );
};
