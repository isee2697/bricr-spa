import React from 'react';

import { TileCheckbox } from 'ui/atoms';
import { HomeIcon } from 'ui/atoms/icons';

import { PropertyTileProps } from './PropertyTile.types';

export const PropertyTile = ({ onClick, title }: PropertyTileProps) => {
  const [toggle, toggleSelect] = React.useState(false);

  const handleClick = () => {
    toggleSelect(v => !v);
    onClick();
  };

  return (
    <TileCheckbox onClick={() => handleClick()} isSelected={toggle} title={<>{title}</>} orientation="horizontal">
      <HomeIcon color="inherit" />
    </TileCheckbox>
  );
};
