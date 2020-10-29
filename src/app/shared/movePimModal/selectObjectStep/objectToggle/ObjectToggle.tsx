import React, { ChangeEvent, useState } from 'react';
import { RadioGroup } from '@material-ui/core';
import { useFormState } from 'react-final-form';

import { Pim as PimEntity } from 'api/types';
import { Radio } from 'ui/atoms/radio/Radio';
import { useLocale } from 'hooks';
import { Grid, FormControlLabel, Typography, Box, Scrollable } from 'ui/atoms';
import { CheckboxGroupField } from 'form/fields';
import { UserIcon } from 'ui/atoms/icons';

type ObjectToggleProps = {
  index: number;
  objects: PimEntity[];
  item: {
    name: string;
    target: string;
    type: string;
  };
};

export const ObjectToggle = ({ index, objects, item }: ObjectToggleProps) => {
  const [isSelectAll, toggleIsSelectAll] = useState<boolean>(true);
  const { formatMessage } = useLocale();
  const { values } = useFormState({
    subscription: {
      values: true,
    },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value as string;

    if (name.startsWith('selection')) {
      toggleIsSelectAll(false);
      values[item.name] = [];
    } else {
      toggleIsSelectAll(true);
      values[item.name] = objects.map(item => item.id);
    }
  };

  return (
    <>
      <RadioGroup style={{ width: '100%' }} name={item.name + '_radio'} onChange={handleChange}>
        <Grid container>
          <Grid xs={6} item key={index}>
            <FormControlLabel
              control={<Radio color="primary" />}
              value={item.name}
              label={
                <>
                  <Typography variant="h5">{formatMessage({ id: `${item.name}.title` })}</Typography>
                  <Typography variant="h6">{(objects ? objects.length : 0) + ' ' + item.type}</Typography>
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
                  <Typography variant="h5">{formatMessage({ id: `${item.name}.title.selection` })}</Typography>
                </>
              }
            />
          </Grid>
        </Grid>
      </RadioGroup>

      {!isSelectAll && (
        <Grid container spacing={2} justify="center">
          <Grid xs={8}>
            <Box my={4}>
              {objects ? (
                <>
                  <Scrollable width="100%" height={'260px'} noBottomScroller>
                    <CheckboxGroupField
                      options={objects.map((item: PimEntity) => ({
                        label: item.street,
                        value: item.id,
                        icon: <UserIcon />,
                      }))}
                      allSelectable
                      isSearchable
                      name={item.name}
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
  );
};
