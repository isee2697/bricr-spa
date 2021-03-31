Example of FolderContainer

```jsx harmony
import { Box } from 'ui/atoms';

<Box>
  <FolderContainer id="folder-container" name="Test Folder" />
  <FolderContainer id="folder-container" name="Test Folder with Count" childCount={4} />
  <FolderContainer id="folder-container" name="Test Secondary Folder" type="secondary" />
  <FolderContainer id="folder-container" name="Test Secondary Folder with Count" childCount={4} type="secondary" />
  <FolderContainer id="folder-container" name="Test Secondary Folder with Remove" type="secondary" onRemove={() => {}} />
  <FolderContainer id="folder-container" name="Test Secondary Folder with Count" childCount={4} type="secondary" onRemove={() => {}} />
  <FolderContainer id="folder-container" name="Test Primary Folder" type="primary" />
  <FolderContainer id="folder-container" name="Test Primary Folder with Count" type="primary" childCount={4} />
  <FolderContainer id="folder-container" name="Test Folder Opened" isOpened />
  <FolderContainer id="folder-container" name="Test Folder with Count Opened" childCount={4} isOpened />
  <FolderContainer id="folder-container" name="Test Folder Opened" isOpened onRemove={() => {}} />
  <FolderContainer id="folder-container" name="Test Folder with Count Opened" childCount={4} isOpened onRemove={() => {}} />
  <FolderContainer id="folder-container" name="Test Primary Folder Opened" type="primary" isOpened />
  <FolderContainer id="folder-container" name="Test Primary Folder with Count Opened" type="primary" childCount={4} isOpened />
</Box>
```