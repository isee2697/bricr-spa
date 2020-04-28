Example of Orders components

```jsx harmony
import { Tabs, Tab } from 'ui/atoms';
import { Order } from 'ui/molecules';
import { Orders } from 'ui/organisms';

const ordersData = [
  {
    labels: ['Verkoop', 'Getekend'],
    price: 375500,
    packages: 3,
    image: 'http://placeimg.com/80/80/arch',
    addressFirstLine: 'Isenburgstraat 36',
    addressSecondLine: 'C.G.M. van Gils 06-48764044',
    id: 'id123'
  }, {
    labels: ['Verkoop', 'Getekend'],
    price: 375500,
    packages: 3,
    image: 'http://placeimg.com/80/80/arch?t=1',
    addressFirstLine: 'Nova Scotiaplein',
    addressSecondLine: 'I. de Bruin 040-9008663',
    id: 'id124'
  }, {
    labels: ['Verkoop', 'Getekend'],
    price: 375500,
    packages: 3,
    image: 'http://placeimg.com/80/80/arch?t=2',
    addressFirstLine: 'Isenburgstraat 36',
    addressSecondLine: 'C.G.M. van Gils 06-48764044',
    id: 'id125'
  },
];

<>
  <Orders 
    onAddClick={() => {}} 
    onMoreClick={() => {}} 
    onManageClick={() => {}}
    tabs={
      <Tabs value={0} indicatorColor="primary" >
        <Tab label="Sale"/>
        <Tab label="Rent"/>
        <Tab label="Appraisal"/>
      </Tabs>
    }>
    {ordersData.map(order => (
      <Order
        labels={order.labels}
        price={order.price}
        packages={order.packages}
        image={order.image}
        onClick={() => {}}
        id={order.id}
        key={order.id}
      >
        <div>{order.addressFirstLine}</div>
        <div>{order.addressSecondLine}</div>
      </Order>
    ))}
  </Orders>
</>
```