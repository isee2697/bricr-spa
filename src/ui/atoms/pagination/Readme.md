Pagination button:

```jsx harmony
import { Pagination } from "ui/atoms";
const [currentPerPage, setCurrentPerPage] = React.useState(10);
<>
  <Pagination count={8} currentPerPage={currentPerPage} perPageOptions={[10, 20, 'All']} onPerPageChange={(value) => setCurrentPerPage(value)}/>
</>
```