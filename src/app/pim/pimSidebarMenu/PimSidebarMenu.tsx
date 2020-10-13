import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { SideMenu } from 'ui/molecules';
import { SideMenuItem, Select, MenuItem } from 'ui/atoms';
import { SaleIcon } from 'ui/atoms/icons/sale/SaleIcon';
import { RentIcon } from 'ui/atoms/icons/rent/RentIcon';
import { NcSaleIcon } from 'ui/atoms/icons/ncSale/NcSaleIcon';
import { MutationIcon } from 'ui/atoms/icons/mutation/MutationIcon';
import { BogIcon } from 'ui/atoms/icons/bog/BogIcon';
import { AogIcon } from 'ui/atoms/icons/aog/AogIcon';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AppRoute } from '../../../routing/AppRoute.enum';
import { SelectPriceType } from '../Pim.types';

import { useStyles } from './PimSidebarMenu.styles';
import { PimSidebarMenuProps } from './PimSidebarMenu.types';

const types = [
  {
    name: 'property',
    icon: <SaleIcon />,
  },
  {
    name: 'nc',
    icon: <NcSaleIcon />,
  },
  {
    name: 'mutation',
    icon: <MutationIcon />,
  },
  {
    name: 'bog',
    icon: <BogIcon />,
  },
  {
    name: 'bog_building',
    icon: <RentIcon />,
  },
  {
    name: 'aog',
    icon: <AogIcon />,
  },
  {
    name: 'parkinglot',
    icon: <AogIcon />,
  },
  {
    name: 'plot',
    icon: <AogIcon />,
  },
];

export const PimSidebarMenu = ({ type, onTypeChange, pricingType, onPricingTypeChange }: PimSidebarMenuProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const { push } = useHistory();
  const { pathname } = useLocation();

  const handleTypeChange = (name: string) => {
    onTypeChange(name);

    if (name.includes('nc')) {
      push(`${AppRoute.project}?pricingType=${pricingType}`);
    } else {
      push(`${AppRoute.pim}?type=${name}&pricingType=${pricingType}`);
    }
  };

  const handlePriceTypeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const priceType = event.target.value as string;

    onPricingTypeChange(type);
    push(`${pathname}?pricingType=${priceType}`);
  };

  return (
    <SideMenu className={classes.root}>
      <Select
        className={classes.dropdown}
        variant="filled"
        value={pricingType}
        fullWidth
        onChange={handlePriceTypeChange}
      >
        <MenuItem value="both">{formatMessage({ id: 'pim.type.both' })}</MenuItem>
        <MenuItem value={SelectPriceType.Rent}>{formatMessage({ id: 'pim.type.rent' })}</MenuItem>
        <MenuItem value={SelectPriceType.Sale}>{formatMessage({ id: 'pim.type.sale' })}</MenuItem>
      </Select>
      {types.map(t => (
        <SideMenuItem
          className="pim-side-menu-item"
          key={t.name}
          icon={t.icon}
          title={formatMessage({ id: `pim.type.${t.name}` })}
          selected={type === t.name}
          onClick={() => handleTypeChange(t.name)}
        />
      ))}
    </SideMenu>
  );
};
