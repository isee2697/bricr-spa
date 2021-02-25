import React, { useState } from 'react';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { Chip } from '@material-ui/core';
import { AnyObject } from 'final-form';

import { Box, Grid, Alert, DialogContent, DialogActions } from 'ui/atoms';
import { Modal } from '../modal/Modal';
import { CancelButton } from '../cancelButton/CancelButton.styles';
import { SubmitButton } from '../submitButton/SubmitButton';
import { useLocale } from 'hooks';
import { CheckboxGroupField, GenericField, RadioGroupField } from 'form/fields';

import { FilterSideMenu } from './filterSideMenu/FilterSideMenu';
import { Range } from './range/Range';
import { DateRange } from './dateRange/DateRange';
import { FilterProps, FiltersTypes, Types } from './Filters.types';
import { FilterTabPanel } from './filterTabPanel/FilterTabPanel';
import { useStyles } from './Filters.styles';

export const Filters = ({
  data,
  isOpened,
  onClose,
  onSubmit,
  onTabChange,
  activeTab,
  filterAmount,
  onDeleteFilter,
  filters,
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
    /* NOTE: updating state is breaking the entire app
     * I have no Idea why
     */
    // const filtersCopy = JSON.parse(JSON.stringify(filters));
    // let newFilters = [];
    // if (filtersCopy) {
    //   newFilters = filtersCopy.map((filter: FiltersTypes) => {
    //     if (filter.options && filter.key === targetFilter.key) {
    //       filter.options = filter.options.filter((item: CheckboxDataType) =>
    //         item.label.toLowerCase().includes(searchValue),
    //       );
    //     }
    //     return filter;
    //   });
    //   setDefaultFilters(newFilters);
    // }
  };

  return (
    <Modal
      fullWidth
      onClose={onClose}
      title={
        <span>
          {formatMessage({ id: 'filter.title' })} {AmountChip}
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
                    } else if (filter.type === Types.Text && filter.size) {
                      return (
                        <FilterTabPanel
                          filterType={filter.type}
                          key={filter.key}
                          activeTab={activeTab}
                          id={i}
                          onDeleteFilter={() => handleDeleteFilter(filter, values)}
                        >
                          <GenericField name={filter.key} label={formatMessage({ id: `filters.${filter.key}` })} />
                        </FilterTabPanel>
                      );
                    } else if (filter.type === Types.DateRange) {
                      return (
                        <FilterTabPanel
                          filterType={filter.type}
                          key={filter.key}
                          activeTab={activeTab}
                          id={i}
                          onDeleteFilter={() => handleDeleteFilter(filter, values)}
                        >
                          <DateRange name={filter.key} />
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
