Example of ConflictInfo component
```jsx harmony
import { ConfirmModal } from './ConfirmModal'; 
import { AutosaveForm } from 'ui/organisms';

<AutosaveForm onSave={() => Promise.resolve(undefined)}>
    <ConfirmModal
        emoji='😬'
        isOpened={true}
        title={'Deleting'}
        onCancel={() => {}}
        onConfirm={() => {}}
        messageLineFirst={'Are you sure?'}
        cancel={'No'}
        confirm={'Yes'}
        confirmButtonType={ConfirmButtonType.ERROR}
    />
</AutosaveForm>
```