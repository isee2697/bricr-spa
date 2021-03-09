Example of Snackbar
```jsx harmony
import { useSnackbar } from 'hooks';
import { Button } from 'ui/atoms';
import { Snackbar } from './Snackbar';

const { open: openSnackbar } = useSnackbar();

<>
  <Button
    size="small"
    variant="contained"
    onClick={() => openSnackbar({
      severity: 'success',
      message: 'Test snackbar message',
      modalTitle: 'Test snackbar',
      onUndo: () => {},
    })}
  >
    Open Snackbar
  </Button>
  <Snackbar />
</>
```