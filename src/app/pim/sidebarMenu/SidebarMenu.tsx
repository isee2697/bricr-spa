import React, { useState } from 'react';

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
import { AppMessages } from 'i18n/messages';

export const SidebarMenu = () => {
  const { formatMessage } = useLocale();

  const [selected, setSelected] = useState(0);

  const handleSelected = (index: number) => () => {
    setSelected(index);
  };

  return (
    <SideMenu>
      <SideMenuItem
        icon={<SaleIcon />}
        title={formatMessage({ id: AppMessages['side_menu.sale'] })}
        selected={selected === 0}
        onClick={handleSelected(0)}
      />
      <SideMenuItem
        icon={<RentIcon />}
        title={formatMessage({ id: AppMessages['side_menu.rent'] })}
        selected={selected === 1}
        onClick={handleSelected(1)}
      />
      <SideMenuItem
        icon={<NcSaleIcon />}
        title={formatMessage({ id: AppMessages['side_menu.nc_sale'] })}
        selected={selected === 2}
        onClick={handleSelected(2)}
      />
      <SideMenuItem
        icon={<NcRentIcon />}
        title={formatMessage({ id: AppMessages['side_menu.nc_rent'] })}
        selected={selected === 3}
        onClick={handleSelected(3)}
      />
      <SideMenuItem
        icon={<MutationIcon />}
        title={formatMessage({ id: AppMessages['side_menu.mutation'] })}
        selected={selected === 4}
        onClick={handleSelected(4)}
      />
      <SideMenuItem
        icon={<BogIcon />}
        title={formatMessage({ id: AppMessages['side_menu.bog'] })}
        selected={selected === 5}
        onClick={handleSelected(5)}
      />
      <SideMenuItem
        icon={<AogIcon />}
        title={formatMessage({ id: AppMessages['side_menu.aog'] })}
        selected={selected === 6}
        onClick={handleSelected(6)}
      />
    </SideMenu>
  );
};
