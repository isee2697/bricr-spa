import React, { ChangeEvent, SetStateAction, useEffect } from 'react';
import { Form } from 'react-final-form';

import { InfoSection, Modal, SubmitButton, SimpleSearch, CancelButton } from 'ui/molecules';
import { useLocale } from 'hooks';
import { Box, DialogActions, DialogContent, Grid, TileCheckbox, Typography } from 'ui/atoms';
import { AddIcon, HomeIcon } from 'ui/atoms/icons';

import { AddLinkedPropertyModalProps, LinkedPimType, LinkedPropertyType } from './AddLinkedPropertyModal.types';
import { useStyles } from './AddLinkedPropertyModal.styles';
import { PropertyTile } from './propertyTile/PropertyTile';

export const AddLinkedPropertyModal = ({
  isOpened,
  onClose,
  onSubmit,
  pimList,
  linkedProperty,
  onPropertySelect,
  selectedPims,
}: AddLinkedPropertyModalProps) => {
  const { formatMessage } = useLocale();
  const [value, setValue] = React.useState('');
  const [propertyList, setPropertyList] = React.useState([]);
  const [filteredProperties, setFilteredProperties] = React.useState(propertyList);
  const [selectedProperty, setSelectedProperty] = React.useState([]);
  const classes = useStyles();

  useEffect(() => {
    setValue('');
    setPropertyList(
      pimList?.filter((i: LinkedPimType) => (i ? !selectedPims.includes(i.id) : false)) as SetStateAction<never[]>,
    );
    setSelectedProperty(
      pimList?.filter((i: LinkedPimType) => (i ? selectedPims.includes(i.id) : false)) as SetStateAction<never[]>,
    );
  }, [pimList, selectedPims, onClose]);

  const handleChange = (v: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const currentValue = v.target.value;
    setValue(currentValue);

    filterProperties(currentValue);
  };

  const filterProperties = (currentValue: string) => {
    const results = propertyList.filter(
      (item: LinkedPropertyType) =>
        item.street?.toLocaleLowerCase().includes(currentValue.toLocaleLowerCase()) ||
        item.city.toLocaleLowerCase().includes(currentValue.toLocaleLowerCase()),
    );
    setFilteredProperties(results);
  };

  const highlightString = (currentValue: string) => {
    if (!value.trim()) {
      return currentValue;
    }

    const parts = currentValue?.split(new RegExp(`(${value})`, 'gi'));

    return parts?.map((part, index) =>
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
                {!!selectedProperty.length && (
                  <Grid item xs={12}>
                    <label className={classes.listLabel}>
                      {formatMessage({ id: 'pim_details.specification.add_linked_property_modal.current_label' })}
                    </label>
                    <Box mt={2} className={classes.list}>
                      {selectedProperty.map((property: LinkedPropertyType, index: number) => (
                        <Box mb={2} key={`${property.street}-selected${index}`}>
                          <TileCheckbox
                            onClick={() => {}}
                            isSelected
                            title={
                              <>
                                {property.street}, {property.city}
                              </>
                            }
                            orientation="horizontal"
                          >
                            <HomeIcon color="inherit" />
                          </TileCheckbox>
                        </Box>
                      ))}
                    </Box>
                  </Grid>
                )}
                <Grid item xs={12}>
                  <label className={classes.listLabel}>
                    {formatMessage({ id: 'pim_details.specification.add_linked_property_modal.result_label' })}
                  </label>
                  <Box mt={2} className={classes.list}>
                    {(filteredProperties.length ? filteredProperties : propertyList).map(
                      (property: LinkedPropertyType, index: number) => (
                        <Box mb={2} key={`${property.street}-${index}`}>
                          <PropertyTile
                            onClick={() => onPropertySelect(property.id)}
                            title={
                              <>
                                {highlightString(property.street ?? '')}, {highlightString(property.city)}
                              </>
                            }
                          />
                        </Box>
                      ),
                    )}
                    {!propertyList && (
                      <InfoSection emoji="🤔">
                        <Typography variant="h3">{formatMessage({ id: 'common.no_results' })}</Typography>
                      </InfoSection>
                    )}
                  </Box>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions className={classes.actions}>
              <CancelButton variant="outlined" size="large" onClick={onClose}>
                {formatMessage({ id: 'common.cancel' })}
              </CancelButton>
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
