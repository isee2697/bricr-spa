Example of Card with FileList

```jsx harmony
    import { CardWithFileList } from './CardWithFileList';
    import { CardWithFileListProps, FileType, FileTypeView } from './CardWithFileList.types';
    import { EMAILS } from '../../../../api/mocks/email';
    
    <CardWithFileList<FileType>
        onAdd={() => {}}
        titleId="Email example"
        titleAmount={EMAILS.length}
        view={FileTypeView.Email}
        files={EMAILS as FileType[]}
        onUploadFiles={files => () => {}}
        actions={{
            onEdit: { exec: () => {} },
            onDelete: { exec: () => {} },
        }}
    />
```

