Example of SideMenuItem component

```jsx harmony
import { SideMenuItem } from 'ui/atoms';
import { SaleIcon } from 'ui/atoms/icons/sale/SaleIcon';
import { RentIcon } from 'ui/atoms/icons/rent/RentIcon';

<>
  <SideMenuItem icon={<SaleIcon />} title="Sale" selected={true} onClick={() => {}} />
  <SideMenuItem icon={<RentIcon />} title="Rent" selected={false} onClick={() => {}} />
</>;
```
