### Icons:

```jsx harmony
import { AddIcon } from './atoms/icons/add/AddIcon';
import { ArrowRightIcon } from './atoms/icons/arrowRight/ArrowRightIcon';
import { ArrowUpIcon } from './atoms/icons/arrowUp/ArrowUpIcon';
import { ArrowDownIcon } from './atoms/icons/arrowDown/ArrowDownIcon';
import { BellIcon } from './atoms/icons/bell/BellIcon';
import { BuildingIcon } from './atoms/icons/building/BuildingIcon';
import { CalendarIcon } from './atoms/icons/calendar/CalendarIcon';
import { CommentIcon } from './atoms/icons/comment/CommentIcon';
import { CheckIcon } from './atoms/icons/check/CheckIcon';
import { CrmIcon } from './atoms/icons/crm/CrmIcon';
import { DashboardIcon } from './atoms/icons/dashboard/DashboardIcon';
import { DocIcon } from './atoms/icons/doc/DocIcon';
import { FilesIcon } from './atoms/icons/files/FilesIcon';
import { FolderIcon } from './atoms/icons/folder/FolderIcon';
import { GraphIcon } from './atoms/icons/graph/GraphIcon';
import { GraphArrowIcon } from './atoms/icons/graphArrow/GraphArrowIcon';
import { HelpIcon } from './atoms/icons/help/HelpIcon';
import { HideIcon } from './atoms/icons/hide/HideIcon';
import { HomeIcon } from './atoms/icons/home/HomeIcon';
import { LinkIcon } from './atoms/icons/link/LinkIcon';
import { MailIcon } from './atoms/icons/mail/MailIcon';
import { ManageIcon } from './atoms/icons/manage/ManageIcon';
import { NoteIcon } from './atoms/icons/note/NoteIcon';
import { PinIcon } from './atoms/icons/pin/PinIcon';
import { SearchIcon } from './atoms/icons/search/SearchIcon';
import { SettingsIcon } from './atoms/icons/settings/SettingsIcon';
import { ShortcutsIcon } from './atoms/icons/shortcuts/ShortcutsIcon';
import { TasksIcon } from './atoms/icons/tasks/TasksIcon';
import { UserIcon } from './atoms/icons/user/UserIcon';
import {palette} from "theme/palette";

const wrapperStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
};

<>
  <div style={wrapperStyle}>
    <AddIcon color="primary"/>
    <ArrowRightIcon color="primary"/>
    <ArrowUpIcon color="primary"/>
    <ArrowDownIcon color="primary"/>
    <BellIcon color="primary"/>
    <BuildingIcon color="primary"/>
  </div>
  <br />
  <div style={wrapperStyle}>
    <CalendarIcon color="secondary"/>
    <CheckIcon color="secondary"/>
    <CrmIcon color="secondary"/>
    <DashboardIcon color="secondary"/>
    <DocIcon color="secondary"/>
    <FilesIcon color="secondary"/>
  </div>
  <br />
  <div style={wrapperStyle}>
    <FolderIcon color={palette.green.main}/>
    <GraphIcon color={palette.green.main}/>
    <GraphArrowIcon color={palette.green.main}/>
    <HelpIcon color={palette.green.main}/>
    <HideIcon color={palette.green.main}/>
    <HomeIcon color={palette.green.main}/>
  </div>
  <br />
  <div style={wrapperStyle}>
    <CommentIcon color="#aaa"/>
    <LinkIcon color="#aaa"/>
    <MailIcon color="#aaa"/>
    <ManageIcon color="#aaa"/>
    <NoteIcon color="#aaa"/>
    <PinIcon color="#aaa"/>
  </div>
  <br />
  <div style={wrapperStyle}>
    <SearchIcon color='orange'/>
    <SettingsIcon color='orange'/>
    <ShortcutsIcon color='orange'/>
    <TasksIcon color='orange'/>
    <UserIcon color='orange'/>
    <div style={{width:24}}></div>
  </div>
</>
```