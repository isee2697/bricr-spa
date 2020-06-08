import React, { ChangeEvent } from 'react';
import { Form } from 'react-final-form';

import { InfoSection, Modal, SubmitButton, SimpleSearch } from 'ui/molecules';
import { useLocale } from 'hooks';
import { Box, Button, DialogActions, DialogContent, Grid, TileCheckbox, Typography } from 'ui/atoms';
import { AddIcon, HomeIcon } from 'ui/atoms/icons';

import { AddLinkedPropertyModalProps, LinkedPropertyType } from './AddLinkedPropertyModal.types';
import { useStyles } from './AddLinkedPropertyModal.styles';

const MOCKED_LINKED_PROPERTIES = [
  {
    address: 'Stationsstraat 25',
    city: 'Amsterdam',
  },
  {
    address: 'Parking Lot 25',
    city: 'Rotterdam',
  },
  {
    address: 'Stationsstraat 26',
    city: 'Haga',
  },
  {
    address: 'Parking Lot 27',
    city: 'Amsterdam',
  },
  {
    address: 'Parking Lot 28',
    city: 'Rotterdam',
  },
  {
    address: 'Stationsstraat 29',
    city: 'Amsterdam',
  },
  {
    address: 'Parking Lot 30',
    city: 'Haga',
  },
  {
    address: 'Stationsstraat 31',
    city: 'Amsterdam',
  },
  {
    address: 'Parking Lot 32',
    city: 'Rotterdam',
  },
];

const MOCKED_SELECTED_PROPERTY = {
  address: 'Parking Lot 32',
  city: 'Amsterdam',
};

export const AddLinkedPropertyModal = ({ isOpened, onClose, onSubmit }: AddLinkedPropertyModalProps) => {
  const { formatMessage } = useLocale();
  const [value, setValue] = React.useState('');
  const [propertyList, setPropertyList] = React.useState<LinkedPropertyType[]>(MOCKED_LINKED_PROPERTIES);
  const classes = useStyles();

  const handleChange = (v: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const currentValue = v.target.value;
    setValue(currentValue);

    filterProperties(currentValue);
  };

  const filterProperties = (currentValue: string) => {
    const results = MOCKED_LINKED_PROPERTIES.filter(
      item =>
        item.address.toLocaleLowerCase().includes(currentValue.toLocaleLowerCase()) ||
        item.city.toLocaleLowerCase().includes(currentValue.toLocaleLowerCase()),
    );
    setPropertyList(results);
  };

  const highlightString = (currentValue: string) => {
    if (!value.trim()) {
      return currentValue;
    }

    const parts = currentValue.split(new RegExp(`(${value})`, 'gi'));

    return parts.map((part, index) =>
      part.toLowerCase().match(value.toLowerCase()) ? (
        <span key={index} className={classes.highlight}>
          {part}
        </span>
      ) : (
        part
      ),
    );
  };

  return (
    <Modal
      fullWidth
      isOpened={isOpened}
      onClose={onClose}
      title={formatMessage({ id: 'pim_details.specification.add_linked_property_modal.title' })}
    >
      <Form onSubmit={onSubmit}>
        {({ handleSubmit, submitErrors, submitting, valid }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            <DialogContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <SimpleSearch
                    onChange={v => handleChange(v)}
                    value={value}
                    placeholderId="pim_details.specification.add_linked_property_modal.search_placeholder"
                  />
                </Grid>
                <Grid item xs={12}>
                  <label className={classes.listLabel}>
                    {formatMessage({ id: 'pim_details.specification.add_linked_property_modal.current_label' })}
                  </label>
                  <Box mt={2} className={classes.list}>
                    <TileCheckbox
                      onClick={() => {}}
                      isSelected
                      title={
                        <>
                          {MOCKED_SELECTED_PROPERTY.address}, {MOCKED_SELECTED_PROPERTY.city}
                        </>
                      }
                      orientation="horizontal"
                    >
                      <HomeIcon color="inherit" />
                    </TileCheckbox>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <label className={classes.listLabel}>
                    {formatMessage({ id: 'pim_details.specification.add_linked_property_modal.result_label' })}
                  </label>
                  <Box mt={2} className={classes.list}>
                    {propertyList.map((property: LinkedPropertyType) => (
                      <Box mb={2}>
                        <TileCheckbox
                          onClick={() => {}}
                          isSelected={false}
                          title={
                            <>
                              {highlightString(property.address)}, {highlightString(property.city)}
                            </>
                          }
                          orientation="horizontal"
                        >
                          <HomeIcon color="inherit" />
                        </TileCheckbox>
                      </Box>
                    ))}
                    {!propertyList.length && (
                      <InfoSection emoji="🤔">
                        <Typography variant="h3">{formatMessage({ id: 'common.no_results' })}</Typography>
                      </InfoSection>
                    )}
                  </Box>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions className={classes.actions}>
              <Button color="default" variant="outlined" onClick={onClose}>
                {formatMessage({ id: 'common.cancel' })}
              </Button>
              <SubmitButton
                type="submit"
                startIcon={<AddIcon color="inherit" />}
                size="large"
                color="primary"
                variant="contained"
                isLoading={submitting}
                disabled={!valid}
              >
                {formatMessage({ id: 'pim_details.specification.custom_property_modal.submit_button' })}
              </SubmitButton>
            </DialogActions>
          </form>
        )}
      </Form>
    </Modal>
  );
};
