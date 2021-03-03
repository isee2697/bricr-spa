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
import { CheckboxDataType, FilterProps, FiltersTypes, Types } from './Filters.types';
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
  const classes = useStyles();
  const [searchFilters, setSearchFiters] = useState<FiltersTypes[]>(filters);
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

  const handleSearch = (targetFilter: FiltersTypes, options: CheckboxDataType[] | undefined) => {
    const newFilters = [...filters].map((filter: FiltersTypes) => {
      if (filter.key === targetFilter.key) {
        filter.options = options;
      }

      return filter;
    });
    setSearchFiters(newFilters);
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
                  {searchFilters.map((filter, i) => {
                    if (filter.type === Types.Range && filter.options) {
                      return (
                        <FilterTabPanel
                          filterType={filter.type}
                          key={filter.key}
                          activeTab={activeTab}
                          id={i}
                          options={filter.options}
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
                          options={filter.options}
                          onDeleteFilter={() => handleDeleteFilter(filter, values)}
                          onSearch={options => handleSearch(filter, options)}
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
                          options={filter.options}
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
                          options={filter.options}
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
                          options={filter.options}
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
