Example of SideMenu component

```jsx harmony
import { SideMenu } from './SideMenu';
import { SideMenuItem } from 'ui/atoms';
import { SaleIcon } from 'ui/atoms/icons/sale/SaleIcon';
import { RentIcon } from 'ui/atoms/icons/rent/RentIcon';
import { NcSaleIcon } from 'ui/atoms/icons/ncSale/NcSaleIcon';

<SideMenu>
  <SideMenuItem icon={<SaleIcon />} title="Sale" selected={true} onClick={() => {}} />
  <SideMenuItem icon={<RentIcon />} title="Rent" selected={false} onClick={() => {}} />
  <SideMenuItem icon={<NcSaleIcon />} title="NC Sale" selected={false} onClick={() => {}} />
</SideMenu>;
```
