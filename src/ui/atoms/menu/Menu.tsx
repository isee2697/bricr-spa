import React, { useRef, useState } from 'react';

import { CardContent, Popper, Card, Box } from '../';
import { useOnClickOutside } from 'hooks/useOnClickOutside/useOnClickOutside';

import { MenuProps } from './Menu.types';
import { useStyles } from './Menu.styles';

// @TODO - we have to improve a11y in that component

export const Menu = ({
  open,
  anchorEl,
  id,
  children,
  placement,
  offsetTop,
  offsetRight,
  offsetBottom,
  offsetLeft,
  arrow,
  onClose,
}: MenuProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [arrRef, setArrRef] = useState<HTMLDivElement | null>(null);
  const classes = useStyles({ offsetTop, offsetRight, offsetBottom, offsetLeft, placement });

  useOnClickOutside(ref, () => onClose());

  return (
    <Popper
      className={classes.popper}
      id={id}
      anchorEl={anchorEl}
      open={open}
      placement={placement}
      modifiers={{ arrow: { enabled: arrow, element: arrRef } }}
      transition
    >
      <div ref={ref}>
        {arrow ? <div className={classes.arrow} ref={setArrRef} /> : null}
        <Box
          mr={offsetRight && offsetRight}
          mt={offsetTop && offsetTop}
          mb={offsetBottom && offsetBottom}
          ml={offsetLeft && offsetLeft}
        >
          <Card className={classes.card}>
            <CardContent>{children}</CardContent>
          </Card>
        </Box>
      </div>
    </Popper>
  );
};
