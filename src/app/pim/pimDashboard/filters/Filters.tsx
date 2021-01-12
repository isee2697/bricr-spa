import EuroIcon from '@material-ui/icons/Euro';
import React, { useState } from 'react';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { Chip } from '@material-ui/core';
import { AnyObject } from 'final-form';

import { PricingType, PropertyType, DateRangeType } from 'api/types';
import { BuildingIcon, ComplexBuildingIcon } from 'ui/atoms/icons';
import { Box, Grid, Alert, DialogContent, DialogActions } from 'ui/atoms';
import { useLocale } from 'hooks';
import { CheckboxGroupField, RadioGroupField } from 'form/fields';
import { Modal, SubmitButton } from 'ui/molecules';
import { CancelButton } from 'ui/molecules/cancelButton/CancelButton.styles';

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
  RadioButton = 'radioButton',
}

const filters: FiltersTypes[] = [
  {
    key: 'dateRange',
    type: Types.RadioButton,
    size: Sizes.L,
    options: [
      { label: DateRangeType.ThirtyDays, value: DateRangeType.ThirtyDays, icon: <ComplexBuildingIcon /> },
      { label: DateRangeType.TwoWeeks, value: DateRangeType.TwoWeeks, icon: <ComplexBuildingIcon /> },
      { label: DateRangeType.OneWeek, value: DateRangeType.OneWeek, icon: <ComplexBuildingIcon /> },
      { label: DateRangeType.ThreeDays, value: DateRangeType.ThreeDays, icon: <ComplexBuildingIcon /> },
    ],
  },
  {
    key: 'propertyTypes',
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
    key: 'accountManager',
    type: Types.RadioButton,
    size: Sizes.L,
    options: [
      { label: PricingType.Sale, value: PricingType.Sale, icon: <EuroIcon /> },
      { label: PricingType.Rent, value: PricingType.Rent, icon: <EuroIcon /> },
    ],
  },
];

export const PimDashboardFilters = ({
  data,
  isOpened,
  onClose,
  onSubmit,
  onTabChange,
  activeTab,
  filterAmount,
  onDeleteFilter,
}: FilterProps) => {
  const { formatMessage } = useLocale();
  const [defaultFilters] = useState(filters);
  const classes = useStyles();

  const AmountChip =
    filterAmount && filterAmount > 0 ? (
      <Chip label={filterAmount} size="small" color="primary" className={classes.titleBadge} />
    ) : null;

  const handleDeleteFilter = (deletedFilter: FiltersTypes, values: AnyObject) => {
    if (values) {
      if (values[deletedFilter.key + '_from']) {
        delete values[deletedFilter.key + '_from'];
      } else if (values[deletedFilter.key + '_to']) {
        delete values[deletedFilter.key + '_to'];
      } else {
        delete values[deletedFilter.key];
      }

      onDeleteFilter(values);
    }
  };

  const handleSearch = (targetFilter: FiltersTypes, values: AnyObject, searchValue: string) => {
    // TODO: Search for filter
  };

  return (
    <Modal
      fullWidth
      onClose={onClose}
      title={
        <span>
          {formatMessage({ id: 'pim.dashboard.filters.title' })} {AmountChip}
        </span>
      }
      isOpened={isOpened}
    >
      <Form
        onSubmit={onSubmit}
        initialValues={data}
        mutators={{ ...arrayMutators }}
        render={({ handleSubmit, submitErrors, submitting, valid, values }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            {submitErrors && submitErrors.error && (
              <DialogContent>
                <Alert severity="error">{formatMessage({ id: 'filter.error.unknown' })}</Alert>
              </DialogContent>
            )}
            <Grid container spacing={0} className={classes.filter}>
              <Grid item xs={4} className={classes.filterSider}>
                <FilterSideMenu selectedFilters={data} filters={filters} onChange={onTabChange} />
              </Grid>
              <Grid item xs={8}>
                <Box p={3}>
                  {defaultFilters.map((filter, i) => {
                    if (filter.type === Types.Range && filter.options) {
                      return (
                        <FilterTabPanel
                          filterType={filter.type}
                          key={filter.key}
                          activeTab={activeTab}
                          id={i}
                          onDeleteFilter={() => handleDeleteFilter(filter, values)}
                        >
                          <>
                            <Range name={filter.key} options={filter.options} suffix={'€'} />
                          </>
                        </FilterTabPanel>
                      );
                    } else if (filter.type === Types.Checkbox && filter.options && filter.size) {
                      return (
                        <FilterTabPanel
                          filterType={filter.type}
                          key={filter.key}
                          activeTab={activeTab}
                          id={i}
                          onDeleteFilter={() => handleDeleteFilter(filter, values)}
                          onSearch={(value: string) => handleSearch(filter, values, value)}
                        >
                          <>
                            <CheckboxGroupField
                              options={filter.options}
                              name={filter.key}
                              orientation="horizontal"
                              xs={filter.size}
                            />
                          </>
                        </FilterTabPanel>
                      );
                    } else if (filter.type === Types.RadioButton && filter.options && filter.size) {
                      return (
                        <FilterTabPanel
                          filterType={filter.type}
                          key={filter.key}
                          activeTab={activeTab}
                          id={i}
                          onDeleteFilter={() => handleDeleteFilter(filter, values)}
                        >
                          <>
                            <RadioGroupField options={filter.options} name={filter.key} xs={filter.size} />
                          </>
                        </FilterTabPanel>
                      );
                    }

                    return null;
                  })}
                </Box>
                <Grid item xs={12} justify="space-between" className={classes.modalFooter}>
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
                      {formatMessage({ id: 'common.filter_list' })}
                    </SubmitButton>
                  </DialogActions>
                </Grid>
              </Grid>
            </Grid>
          </form>
        )}
      />
    </Modal>
  );
};
