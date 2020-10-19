Example of ImageHolder component with and withouth an image
```jsx harmony
import { AvatarRowItem } from 'ui/atoms';

<>
 <div style={{ float: 'left'}}><AvatarRowItem name="Christian van Gils" onDelete={() => {}} src="https://source.unsplash.com/featured/?map" /></div>
 <div style={{ float: 'left'}}><AvatarRowItem name="Christian van Gils" onDelete={() => {}} /></div>
</>
```