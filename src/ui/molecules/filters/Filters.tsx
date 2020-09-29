import React, { useState } from 'react';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import EuroIcon from '@material-ui/icons/Euro';

import { PricingType, PropertyType } from 'api/types';
import { BuildingIcon } from 'ui/atoms/icons';
import { Box, Grid, Alert, DialogContent, DialogActions } from 'ui/atoms';
import { Modal } from '../modal/Modal';
import { CancelButton } from '../cancelButton/CancelButton.styles';
import { SubmitButton } from '../submitButton/SubmitButton';
import { useLocale } from 'hooks';
import { CheckboxGroupField } from 'form/fields';

import { FilterSideMenu } from './filterSideMenu/FilterSideMenu';
import { Range } from './range/Range';
import { FilterProps, FiltersTypes } from './Filters.types';
import { FilterTabPanel } from './filterTabPanel/FilterTabPanel';
import { useStyles } from './Filters.styles';

enum Sizes {
  M = 6,
  L = 12,
}

enum Types {
  Range = 'range',
  Checkbox = 'checkbox',
}

const filters: FiltersTypes[] = [
  // {
  //   key: 'price_range',
  //   value: 0,
  //   type: Types.Range,
  //   size: Sizes.L,
  //   options: [
  //     { label: 'from', value: '0', icon: <></> },
  //     { label: 'to', value: '5000', icon: <></> },
  //   ],
  // },
  {
    key: 'propertyTypes',
    value: 0,
    type: Types.Checkbox,
    size: Sizes.M,
    options: [
      { label: PropertyType.Apartment, value: PropertyType.Apartment, icon: <BuildingIcon /> },
      { label: PropertyType.House, value: PropertyType.House, icon: <BuildingIcon /> },
      { label: PropertyType.Commercial, value: PropertyType.Commercial, icon: <BuildingIcon /> },
      { label: PropertyType.Agricultural, value: PropertyType.Agricultural, icon: <BuildingIcon /> },
      { label: PropertyType.ParkingLot, value: PropertyType.ParkingLot, icon: <BuildingIcon /> },
      { label: PropertyType.BuildingPlot, value: PropertyType.BuildingPlot, icon: <BuildingIcon /> },
    ],
  },
  {
    key: 'pricingType',
    value: 1,
    type: Types.Checkbox,
    size: Sizes.M,
    options: [
      { label: PricingType.Sale, value: PricingType.Sale, icon: <EuroIcon /> },
      { label: PricingType.Rent, value: PricingType.Rent, icon: <EuroIcon /> },
    ],
  },
];

export const Filters = ({ data, isOpened, onClose, onSubmit }: FilterProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(filters[0].value);

  const handleTabChange = (tab: FiltersTypes) => {
    setActiveTab(tab.value);
  };

  return (
    <Modal fullWidth title={formatMessage({ id: 'filter.title' })} isOpened={isOpened}>
      <Form onSubmit={onSubmit} initialValues={data} mutators={{ ...arrayMutators }}>
        {({ handleSubmit, submitErrors, submitting, valid }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            {submitErrors && submitErrors.error && (
              <DialogContent>
                <Alert severity="error">{formatMessage({ id: 'filter.error.unknown' })}</Alert>
              </DialogContent>
            )}
            <Grid container spacing={0} className={classes.filter}>
              <Grid item xs={4} className={classes.filterSider}>
                <FilterSideMenu filters={filters} onChange={handleTabChange} />
              </Grid>
              <Grid item xs={8}>
                <Box p={3}>
                  {filters.map((filter, i) => {
                    if (filter.type === Types.Range && filter.options) {
                      return (
                        <FilterTabPanel key={filter.key} activeTab={activeTab} id={filter.value}>
                          <>
                            <p>{formatMessage({ id: `${filter.key}.title` })}</p>
                            <Range name={filter.key} options={filter.options} suffix={'€'} />
                          </>
                        </FilterTabPanel>
                      );
                    } else if (filter.type === Types.Checkbox && filter.options && filter.size) {
                      return (
                        <FilterTabPanel key={filter.key} activeTab={activeTab} id={filter.value}>
                          <>
                            <p>{formatMessage({ id: `${filter.key}.title` })}</p>
                            <CheckboxGroupField
                              options={filter.options}
                              name={filter.key}
                              orientation="horizontal"
                              xs={filter.size}
                            />
                          </>
                        </FilterTabPanel>
                      );
                    }

                    return null;
                  })}
                </Box>
              </Grid>
              <Grid container justify="flex-end">
                <DialogActions>
                  <CancelButton variant="outlined" size="large" onClick={onClose}>
                    {formatMessage({ id: 'common.cancel' })}
                  </CancelButton>
                  <SubmitButton
                    type="submit"
                    size="large"
                    color="primary"
                    variant="contained"
                    onClick={handleSubmit}
                    isLoading={submitting}
                    disabled={!valid}
                  >
                    Filter list
                  </SubmitButton>
                </DialogActions>
              </Grid>
            </Grid>
          </form>
        )}
      </Form>
    </Modal>
  );
};
