import React from 'react';
import { TileCheckbox } from 'ui/atoms';
import { HomeIcon } from 'ui/atoms/icons';

import { PropertyTileProps } from './PropertyTile.types';

export const PropertyTile = ({ onClick, title, isSelected = false }: PropertyTileProps) => {
  const [selected, setSelected] = React.useState(isSelected);

  const handleClick = () => {
    setSelected(v => !v);
    onClick();
  };

  return (
    <TileCheckbox onClick={handleClick} isSelected={selected} title={<>{title}</>} orientation="horizontal">
      <HomeIcon color="inherit" />
    </TileCheckbox>
  );
};
