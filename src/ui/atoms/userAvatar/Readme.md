Example of UserAvatar component with Initials

```jsx harmony
import { Box } from 'ui/atoms/';
import { UserAvatar } from './UserAvatar';

<Box display="flex">
  <Box mr={2}>
    <UserAvatar name="Gerbert Oude Velthuis"/>
  </Box>
  <Box mr={2}>
    <UserAvatar name="Lord Andreas Otten"/>
  </Box>
  <Box mr={2}>
    <UserAvatar name="Rens van Gils"/>
  </Box>
  <Box mr={2}>
    <UserAvatar name="Christian van Gils"/>
  </Box>
  <Box mr={2}>
    <UserAvatar name="Willem"/>
  </Box>
  <Box mr={2}>
    <UserAvatar name="Piela Marcin"/>
  </Box>
</Box>
```

Example of UserAvatar component with image

```jsx harmony
import { Box } from 'ui/atoms/';
import { UserAvatar } from './UserAvatar';

<UserAvatar 
  name="Lorem Ipsum"
  avatar="https://material-ui.com/static/images/avatar/1.jpg"
/>

```