Example of SideMenu component

```jsx harmony
import { SideMenu } from './SideMenu';
import { SideMenuItem, SideSubMenuItem } from 'ui/atoms';
import { SaleIcon } from 'ui/atoms/icons/sale/SaleIcon';
import { RentIcon } from 'ui/atoms/icons/rent/RentIcon';
import { NcSaleIcon } from 'ui/atoms/icons/ncSale/NcSaleIcon';
import { NoteIcon } from 'ui/atoms/icons/note/NoteIcon';

<SideMenu>
  <SideMenuItem icon={<SaleIcon />} title="Sale" selected={true} />
  <SideMenuItem icon={<RentIcon />} title="Rent" selected={false} />
  <SideMenuItem icon={<NoteIcon />} title="Inside" selected={false}>
    <SideSubMenuItem title="Floor 1" selected={false} />
    <SideSubMenuItem title="Groundfloor" selected={true} />
    <SideSubMenuItem title="Basement" selected={false} />
  </SideMenuItem>
</SideMenu>;
```
