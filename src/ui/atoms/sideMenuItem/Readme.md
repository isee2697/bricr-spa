Example of SideMenuItem component

```jsx harmony
import { SideMenuItem, Typography, Box } from 'ui/atoms';
import { SaleIcon } from 'ui/atoms/icons/sale/SaleIcon';
import { RentIcon } from 'ui/atoms/icons/rent/RentIcon';

<>
  <SideMenuItem title={<><SaleIcon /><Box mr={2}/><Typography variant="h3">Sale</Typography></>} selected={true} onClick={() => {}} />
  <SideMenuItem title={<><RentIcon /><Box mr={2}/><Typography variant="h3">Rent</Typography></>} selected={false} onClick={() => {}} />
</>;
```
