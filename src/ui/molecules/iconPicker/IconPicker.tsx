import React, { ReactNode } from 'react';
import classNames from 'classnames';

import { Box, Grid, IconButton } from 'ui/atoms';

import { useStyles } from './IconPicker.styles';
import { IconPickerProps } from './IconPicker.types';

export const IconPicker = ({ iconList, selectedIcon, size, color }: IconPickerProps) => {
  const classes = useStyles({ size, color });
  const [isSelected, setSelected] = React.useState();

  return (
    <Grid container spacing={1}>
      {iconList.map((item: ReactNode, index: number) => (
        <Grid item key={`icon-picker-icon-${index}`}>
          <Box
            onClick={() => {
              setSelected(index);
            }}
            className={classNames(isSelected === index && classes.isSelected)}
          >
            <IconButton
              size="small"
              variant="roundedContained"
              onClick={() => selectedIcon(item)}
              className={classes.button}
            >
              {item}
            </IconButton>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};
