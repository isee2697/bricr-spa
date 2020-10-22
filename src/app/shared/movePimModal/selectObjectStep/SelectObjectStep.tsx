import React, { ChangeEvent, useEffect, useState } from 'react';
import { Field } from 'react-final-form';
import { RadioGroup } from '@material-ui/core';
import { AnyObject } from 'final-form';

import { useLocale } from 'hooks';
import { DialogContent, Grid, DialogActions, FormControlLabel, Typography, Box } from 'ui/atoms';
import { SimpleSearch, SubmitButton } from 'ui/molecules';
import { Radio } from 'ui/atoms/radio/Radio';
import { SelectStepProps } from '../MovePimModal.types';
import { CheckboxGroupField } from 'form/fields';
import { UserIcon } from 'ui/atoms/icons';
import { Scrollable } from 'ui/atoms';
import { ListPimsQuery, Pim as PimEntity } from 'api/types';

enum OptionType {
  properties = 'Properties',
  projects = 'Projects',
  bog = 'BOG objects',
  relet = 'Relet projects',
  aog = 'AOG objects',
}
const checkboxes = [
  {
    name: 'select.all.properties',
    target: 'propertyListData',
    amount: 300,
    type: OptionType.properties,
  },
  {
    name: 'select.all.nc.projects',
    target: 'ncListData',
    amount: 40,
    type: OptionType.projects,
  },
  {
    name: 'select.all.bog.objects',
    target: 'bogListData',
    amount: 12,
    type: OptionType.bog,
  },
  {
    name: 'select.all.relet.projects',
    target: 'reletListData',
    amount: 400,
    type: OptionType.relet,
  },
  {
    name: 'select.all.aog.projects',
    target: 'aogListData',
    amount: 1,
    type: OptionType.aog,
  },
];

export const SelectObjectStep = ({ onNext, objects }: SelectStepProps) => {
  const [search, setSearch] = useState<string>('');
  const [selectedObjects, setSelectedObjects] = useState<{ [key: string]: string }>({
    'select.all.properties': 'all',
    'select.all.projects': 'all',
    'select.all.bog.objects': 'all',
    'select.all.relet.projects': 'all',
    'select.all.aog.projects': 'all',
  });
  const { formatMessage } = useLocale();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isSelection = e.target.value.startsWith('selection-');
    const target = e.target.value.split('selection-').join('') as string;
    const newObjects = JSON.parse(JSON.stringify(selectedObjects));

    if (isSelection) {
      newObjects[target] = 'selection';
    } else {
      newObjects[target] = 'all';
    }

    setSearch('');
    setSelectedObjects(newObjects);
  };

  console.log({ objects });

  return (
    <Field name="object">
      {({ input }) => (
        <>
          <DialogContent>
            <Grid container spacing={2}>
              {checkboxes.map((item, index) => (
                <>
                  <RadioGroup style={{ width: '100%' }} name={item.name} onChange={handleChange}>
                    <Grid container>
                      <Grid xs={6} item key={index}>
                        <FormControlLabel
                          control={<Radio color="primary" />}
                          value={item.name}
                          label={
                            <>
                              <Typography variant="h5">{formatMessage({ id: `${item.name}.title` })}</Typography>
                              <Typography variant="h6">
                                {(objects && objects[item.target] ? objects[item.target].length : 0) + ' ' + item.type}
                              </Typography>
                            </>
                          }
                        />
                      </Grid>
                      <Grid xs={6} item key={'selection-' + index}>
                        <FormControlLabel
                          control={<Radio color="primary" />}
                          value={'selection-' + item.name}
                          label={
                            <>
                              <Typography variant="h5">
                                {formatMessage({ id: `${item.name}.title.selection` })}
                              </Typography>
                            </>
                          }
                        />
                      </Grid>
                    </Grid>
                  </RadioGroup>

                  {selectedObjects[item.name as string] === 'selection' && (
                    <Grid container spacing={2} justify="center">
                      <Grid xs={8}>
                        <Box my={4}>
                          {objects && objects[item.target] ? (
                            <>
                              <Box mb={3}>
                                <SimpleSearch onChange={v => setSearch(v.currentTarget.value)} value={search} />
                              </Box>

                              <Scrollable width="100%" height="260px">
                                <CheckboxGroupField
                                  options={objects[item.target].map(item => ({
                                    label: item.street,
                                    value: item.id,
                                    icon: <UserIcon />,
                                  }))}
                                  name="linked_managers"
                                  orientation="horizontal"
                                  xs={12}
                                />
                              </Scrollable>
                            </>
                          ) : (
                            <Box>
                              <Typography>{formatMessage({ id: `no.${item.name}.title` })}</Typography>
                            </Box>
                          )}
                        </Box>
                      </Grid>
                    </Grid>
                  )}
                </>
              ))}
            </Grid>
          </DialogContent>

          <DialogActions>
            <Grid container justify="space-between">
              <Grid></Grid>
              <Grid>
                <SubmitButton size="large" color="primary" variant="contained" onClick={onNext}>
                  {formatMessage({ id: 'common.next' })}
                </SubmitButton>
              </Grid>
            </Grid>
          </DialogActions>
        </>
      )}
    </Field>
  );
};
