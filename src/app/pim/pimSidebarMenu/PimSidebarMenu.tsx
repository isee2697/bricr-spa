import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { SideMenu } from 'ui/molecules';
import { SideMenuItem } from 'ui/atoms';
import { SaleIcon } from 'ui/atoms/icons/sale/SaleIcon';
import { RentIcon } from 'ui/atoms/icons/rent/RentIcon';
import { NcSaleIcon } from 'ui/atoms/icons/ncSale/NcSaleIcon';
import { NcRentIcon } from 'ui/atoms/icons/ncRent/NcRentIcon';
import { MutationIcon } from 'ui/atoms/icons/mutation/MutationIcon';
import { BogIcon } from 'ui/atoms/icons/bog/BogIcon';
import { AogIcon } from 'ui/atoms/icons/aog/AogIcon';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AppRoute } from '../../../routing/AppRoute.enum';

import { useStyles } from './PimSidebarMenu.styles';
import { PimSidebarMenuProps } from './PimSidebarMenu.types';

const types = [
  {
    name: 'sale',
    icon: <SaleIcon />,
  },
  {
    name: 'rent',
    icon: <RentIcon />,
  },
  {
    name: 'nc_sale',
    icon: <NcSaleIcon />,
  },
  {
    name: 'nc_rent',
    icon: <NcRentIcon />,
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
    name: 'aog',
    icon: <AogIcon />,
  },
];

export const PimSidebarMenu = ({ type, onTypeChange }: PimSidebarMenuProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const { push } = useHistory();
  const { pathname } = useLocation();
  const handleTypeChange = (name: string) => {
    onTypeChange(name);

    if (name.includes('nc_')) {
      push(`${AppRoute.project}?type=${name}`);
    } else if (pathname === AppRoute.project) {
      push(`${AppRoute.pim}?type=${name}`);
    }
  };

  return (
    <SideMenu className={classes.root}>
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
