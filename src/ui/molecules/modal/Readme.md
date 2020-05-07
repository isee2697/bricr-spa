Example of Modal component
```jsx harmony
import { Modal } from 'ui/molecules';
import { Button, DialogContent, DialogContentText, DialogActions } from 'ui/atoms';

const [isOpened, setOpened] = React.useState(false);

<>
  <Button color="primary" variant="outlined" onClick={() => setOpened(true)}>Open modal</Button>
  <Modal title="Simple modal example" isOpened={isOpened} onClose={() => setOpened(false)}>
    <DialogContent>
      Let Google help apps determine location. This means sending anonymous location data to Google, even when no
      apps are running.
    </DialogContent>
    <DialogActions>
      <Button onClick={() => setOpened(false)} color="primary" variant="outlined">
        Disagree
      </Button>
      <Button onClick={() => setOpened(false)} color="primary" variant="outlined" autoFocus>
        Agree
      </Button>
    </DialogActions>
  </Modal>
</>
```

Without close icon and actions, with "lg" width
```jsx harmony
import { Modal } from 'ui/molecules';
import { Button, DialogContent, DialogContentText, DialogActions } from 'ui/atoms';

const [isOpened, setOpened] = React.useState(false);

<>
  <Button color="primary" variant="outlined" onClick={() => setOpened(true)}>Open modal</Button>
  <Modal title="Simple modal example" isOpened={isOpened} fullWidth maxWidth="lg">
    <DialogContent>
      Let Google help apps determine location. This means sending anonymous location data to Google, even when no
      apps are running. 
      <br/><br/>
      <Button onClick={() => setOpened(false)} color="primary" variant="outlined" autoFocus>
        Close
      </Button>
    </DialogContent>
  </Modal>
</>
```

Fullscreen example
```jsx harmony
import { Modal } from 'ui/molecules';
import { Button, DialogContent, DialogContentText, DialogActions } from 'ui/atoms';

const [isOpened, setOpened] = React.useState(false);

<>
  <Button color="primary" variant="outlined" onClick={() => setOpened(true)}>Open modal</Button>
  <Modal title="Fullscreen modal example" isOpened={isOpened} fullScreen onClose={() => setOpened(false)}>
    <DialogContent>
      Let Google help apps determine location. This means sending anonymous location data to Google, even when no
      apps are running. 
    </DialogContent>
  </Modal>
</>
```