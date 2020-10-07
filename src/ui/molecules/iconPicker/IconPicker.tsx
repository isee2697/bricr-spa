import React, { useMemo } from 'react';
import classNames from 'classnames';
import { useField } from 'react-final-form';
import { Box, Grid, IconButton } from 'ui/atoms';

import { useStyles } from './IconPicker.styles';
import { IconPickerProps, IconSelectedTheme } from './IconPicker.types';

export const IconPicker = ({
  iconList,
  size,
  color,
  name,
  selectedTheme = IconSelectedTheme.DEFAULT,
}: IconPickerProps) => {
  const classes = useStyles({ size, color, selectedTheme });
  const { input } = useField(name);

  const selectedIndex = useMemo(() => iconList.findIndex(item => item.name === input.value), [input, iconList]);

  return (
    <Grid id={`icon-picker-${name}`} container spacing={1}>
      {iconList.map((item, index: number) => (
        <Grid item key={`icon-picker-icon-${index}`}>
          <Box className={classNames(selectedIndex === index && classes.isSelected)}>
            <IconButton
              size="small"
              variant="roundedContained"
              onClick={() =>
                input.onChange({
                  target: {
                    value: item.name,
                    name,
                  },
                })
              }
              className={classes.button}
            >
              {item.icon}
            </IconButton>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};
