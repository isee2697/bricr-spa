import React, { useState } from 'react';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';

import { UserIcon, BuildingIcon } from 'ui/atoms/icons';
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
  {
    key: 'filters.price_range',
    value: 0,
    type: Types.Range,
    size: Sizes.L,
    from: 0,
    to: 5000,
  },
  {
    key: 'filter.object_type',
    value: 1,
    type: Types.Checkbox,
    size: Sizes.M,
    options: [
      { label: 'Custom name of object type 1', value: '1', icon: <BuildingIcon /> },
      { label: 'Custom name of object type 2', value: '2', icon: <BuildingIcon /> },
      { label: 'Custom name of object type 3', value: '3', icon: <BuildingIcon /> },
      { label: 'Custom name of object type 4', value: '4', icon: <BuildingIcon /> },
    ],
  },
  {
    key: 'filter.account_managers',
    value: 2,
    type: Types.Checkbox,
    size: Sizes.L,
    options: [
      { label: 'Victor Martin Brochner', value: '1', icon: <UserIcon /> },
      { label: 'Victor Martin Brochner', value: '2', icon: <UserIcon /> },
      { label: 'Victor Martin Brochner', value: '3', icon: <UserIcon /> },
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
      <Form onSubmit={onSubmit} mutators={{ ...arrayMutators }}>
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
                  {filters.map(filter => {
                    if (filter.type === 'range') {
                      return (
                        <FilterTabPanel key={filter.key} activeTab={activeTab} id={filter.value}>
                          <>
                            <p>{formatMessage({ id: `${filter.key}.title` })}</p>
                            <Range name={filter.key} startValue={0} endValue={500000} suffix={'€'} />
                          </>
                        </FilterTabPanel>
                      );
                    } else if (filter.type === 'checkbox' && filter.options && filter.size) {
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
