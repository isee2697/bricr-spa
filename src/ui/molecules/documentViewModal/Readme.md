Example of Modal component
```jsx harmony
import { DocumentViewModal } from 'ui/molecules';
import { Button, DialogContent, DialogContentText, DialogActions } from 'ui/atoms';

const [isOpened, setOpened] = React.useState(false);
const documents = [{ uri: 'https://hello.nl/myimage.jpg' }];

<>
  <Button color="primary" variant="outlined" onClick={() => setOpened(true)}>Open modal</Button>
  <DocumentViewModal documents={documents} isOpened={isOpened} onClose={() => setOpened(false)} />
</>
```

Without close icon and actions, with "lg" width
```jsx harmony
import { DocumentViewModal } from 'ui/molecules';
import { Button, DialogContent, DialogContentText, DialogActions } from 'ui/atoms'
const documents = [{ uri: 'https://hello.nl/myimage.jpg' }];
const [isOpened, setOpened] = React.useState(false);

<>
  <Button color="primary" variant="outlined" onClick={() => setOpened(true)}>Open modal</Button>
  <DocumentViewModal documents={documents} isOpened={isOpened} fullWidth maxWidth="lg" />
   
</>
```

Fullscreen example
```jsx harmony
import { DocumentViewModal } from 'ui/molecules';
import { Button, DialogContent, DialogContentText, DialogActions } from 'ui/atoms';

const documents = [{ uri: 'https://hello.nl/myimage.jpg' }];
const [isOpened, setOpened] = React.useState(false);

<>
  <Button color="primary" variant="outlined" onClick={() => setOpened(true)}>Open modal</Button>
  <DocumentViewModal documents={documents} isOpened={isOpened} fullScreen onClose={() => setOpened(false)} />
   
</>
```