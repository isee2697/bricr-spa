Example of Card with Table

```jsx harmony
import { CardWithTable } from './CardWithTable';
import { FileType, FileTypeView } from './CardWithTable.types';
import {EMAILS} from '../../../../api/mocks/email';
<>
    <CardWithTable
        onAdd={() => {
    }}
        titleId="Email example"
        titleAmount={EMAILS.length}
        view={FileTypeView.Email}
        files={EMAILS}
        onUploadFiles={files => () => {
    }}
        actions={{
        onEdit: {
            exec: () => {
            }
        },
        onDelete: {
            exec: () => {
            }
        },
    }}
        />
    </>
```

