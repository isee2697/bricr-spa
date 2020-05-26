Example of ImageHolder component with and withouth an image
```jsx harmony
import { ImageHolder } from 'ui/atoms';

<>
 <div style={{padding: '8px', height: '200px', width: '100px', float: 'left'}}><ImageHolder withBorder src="https://source.unsplash.com/featured/?map" /></div>
 <div style={{padding: '8px', height: '200px', width: '100px', float: 'left'}}><ImageHolder withBorder /></div>
 <div style={{padding: '8px', height: '200px', width: '100px' , float: 'left'}}><ImageHolder src="https://source.unsplash.com/featured/?building" /></div>
 <div style={{padding: '8px', height: '200px', width: '100px' , float: 'left'}}><ImageHolder /></div>
</>
```