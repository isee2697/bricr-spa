Example of ProfileItem

```jsx harmony
import { ProfileItem } from './ProfileItem';

const profileData = {
  name: 'Christian van Gils',
  avatar: 'https://source.unsplash.com/featured/?building',
  phone: '12345678',
  email: 'christian@test.com',
  notes: 'This is Christian profile item',
  teamNames: ['Team 1', 'Team 2'],
  rights: ['Admin', 'Super'],
  functionDescription: 'Christian functionality',
  inActive: true,
  hideMenuButton: true,
};

<>
  <ProfileItem
    name={profileData.name}
    avatar={profileData.avatar}
    phone={profileData.phone}
    email={profileData.email}
    notes={profileData.notes}
    teamNames={profileData.teamNames}
    rights={profileData.rights}
    functionDescription={profileData.functionDescription}
  />
  <ProfileItem
    name={profileData.name}
    avatar={profileData.avatar}
    phone={profileData.phone}
    email={profileData.email}
    notes={profileData.notes}
    teamNames={profileData.teamNames}
    rights={profileData.rights}
    functionDescription={profileData.functionDescription}
    inActive={profileData.inActive}
    hideMenuButton={profileData.hideMenuButton}
  />
</>
```