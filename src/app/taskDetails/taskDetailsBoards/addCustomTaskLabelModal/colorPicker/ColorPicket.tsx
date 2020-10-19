import React from 'react';

import { IconSelectedTheme } from 'ui/molecules/iconPicker/IconPicker.types';
import { Box } from 'ui/atoms';

import { ColorPickerItem } from './ColorPickerItem';
import { useStyles } from './ColorPicker.styles';
import { ColorPickerProps } from './ColorPicker.types';

export const ColorPicker = ({ selectedTheme, onChangeTheme }: ColorPickerProps) => {
  const classes = useStyles();

  return (
    <Box display="flex" flexWrap="wrap" className={classes.root}>
      {Object.values(IconSelectedTheme).map(theme => (
        <ColorPickerItem selected={theme === selectedTheme} theme={theme} onClick={() => onChangeTheme(theme)} />
      ))}
    </Box>
  );
};
