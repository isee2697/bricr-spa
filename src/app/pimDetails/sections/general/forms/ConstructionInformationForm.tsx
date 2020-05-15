import React, { useState } from 'react';
import { Form } from 'react-final-form';

import { Grid, TileRadio, Box } from 'ui/atoms';
import { ListIcon, NcSaleIcon } from 'ui/atoms/icons';
import { FormSubSection } from 'ui/molecules';
import { FormSection } from 'ui/organisms';
import { GenericField, DatePickerField } from 'form/fields';
import { useLocale } from 'hooks';
import { AppMessages } from 'i18n/messages';
import { useStyles } from '../General.styles';

const CONSTRUCTIONS = [
  {
    key: 'under_construction',
    icon: <ListIcon />,
  },
  {
    key: 'in_development',
    icon: <NcSaleIcon />,
  },
];

export const ConstructionInformationForm = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const [construction, setConstruction] = useState('');

  return (
    <FormSection
      title={formatMessage({ id: AppMessages['pim_details.general.construction_information.title'] })}
      isExpandable
    >
      {editing => (
        <Form onSubmit={() => {}}>
          {({ handleSubmit }) => (
            <>
              <FormSubSection
                className={classes.subHeader}
                title={formatMessage({
                  id: AppMessages['pim_details.general.construction_information.status_construction'],
                })}
                subtitle={formatMessage({ id: AppMessages['pim_details.choose_one_option_below'] })}
              />
              <Grid container spacing={1} className={classes.tilesContainer}>
                {CONSTRUCTIONS.map(({ key, icon }) => (
                  <Grid item sm={3} md={2} key={key}>
                    <TileRadio
                      title={formatMessage({
                        id: `pim_details.general.construction_information.${key}`,
                      })}
                      onClick={() => setConstruction(key)}
                      isSelected={construction === key}
                      isDisabled={!editing}
                    >
                      {icon}
                    </TileRadio>
                  </Grid>
                ))}
              </Grid>
              <Box mt={4}>
                <Grid className={classes.textFields} container spacing={3}>
                  <Grid item xs={4}>
                    <DatePickerField
                      name="street"
                      label="common.from"
                      placeholder="common.from_placeholder"
                      disabled={!editing}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <DatePickerField
                      name="street"
                      label="common.to"
                      placeholder="common.to_placeholder"
                      disabled={!editing}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <GenericField
                      name="city"
                      label="common.notes"
                      placeholder="common.notes_placeholder"
                      disabled={!editing}
                    />
                  </Grid>
                </Grid>
              </Box>
            </>
          )}
        </Form>
      )}
    </FormSection>
  );
};
