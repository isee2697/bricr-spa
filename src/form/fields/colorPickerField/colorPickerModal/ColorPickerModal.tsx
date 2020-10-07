import { useTheme } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { ChromePicker, RGBColor } from 'react-color';

import { Button, Dialog, DialogActions, Zoom } from 'ui/atoms';
import { useLocale } from 'hooks';

import { usePickerStyles, useStyles } from './ColorPickerModal.styles';
import { hexAToRGBA, RGBAToHexA } from './ColorPickerModal.utils';
import { ColorPickerModalProps } from './ColorPickerModal.types';

export const ColorPickerModal = ({ isOpened, onClose, initialColor }: ColorPickerModalProps) => {
  const { formatMessage } = useLocale();
  const [color, setColor] = useState<RGBColor>(hexAToRGBA(initialColor));
  const classes = useStyles();
  const theme = useTheme();
  const pickerStyles = usePickerStyles(theme);

  return (
    <Dialog TransitionComponent={Zoom} open={isOpened}>
      <div className={classes.container}>
        <ChromePicker styles={pickerStyles} color={color} onChange={color => setColor(color.rgb)} />
      </div>
      <DialogActions className={classes.actions}>
        <Button variant="outlined" color="primary" size="small" onClick={() => onClose(null)}>
          {formatMessage({ id: 'color_picker.cancel' })}
        </Button>
        <Button size="small" color="primary" variant="contained" onClick={() => onClose(RGBAToHexA(color))}>
          {formatMessage({ id: 'color_picker.confirm' })}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
