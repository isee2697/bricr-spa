Example of Order components

```jsx harmony
import { Order } from 'ui/molecules';

const orderData = {
  labels: ['Verkoop', 'Getekend'],
  price: 375500,
  packages: 3,
  image: 'http://placeimg.com/80/80/arch',
  id: 'test1'
};

<>
  <Order
    name={orderData.name}
    labels={orderData.labels}
    price={orderData.price}
    packages={orderData.packages}
    image={orderData.image}
    id={orderData.id}
    onClick={() => {}}
  >
    <div>Isenburgstraat 36</div>
    <div>C.G.M. van Gils 06-48764044</div>
  </Order>
  <Order
    name={orderData.name}
    labels={orderData.labels}
    price={orderData.price}
    packages={orderData.packages}
    image={`${orderData.image}?t=2`}
    id={`${orderData.id}2`}
    onClick={() => {}}
  >
    <div>Nova Scotiaplein</div>
    <div>I. de Bruin 040-9008663</div>
  </Order>
</>
```