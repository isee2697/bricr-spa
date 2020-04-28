Example of Email components

```jsx harmony
import { Email } from 'ui/molecules/email/Email';

const emailData1 = {
  name: 'Mariusz Nowak',
  avatar: '',
  title: 'Overview of Recent Updates',
  content: 'Consectetur adipisicing elit. Ad assumenda blanditiis consequatur culpa cum dolore, earum esse fugiat ipsa magni mollitia nobis officia omnis quam quia quisquam rerum saepe tempore tenetur vero voluptate voluptatem voluptatum? Beatae dicta dolorum modi nobis!',
  date: new Date(),
  open: false,
  id: 'id1233'
};

const emailData2 = {
  name: 'Gerbert Oude Velthuis',
  avatar: '',
  title: 'Branding information',
  content: 'Good morning Mariusz, Thank you for your feedback. You asked for information, you get information good morning Mariusz, Thank you for your feedback. You asked for information, you get information',
  date: new Date(),
  open: false,
  id: 'id1234'
};

const emailData3 = {
  name: 'Rens van Gils, Marek Gajda',
  avatar: '',
  title: 'Agenda Bricr UI/UX workshop',
  content: 'As Eric shared last week, our commitment to strengthening and improving Zoom is our number one as Eric shared last week, our commitment to strengthening and improving Zoom is our number one',
  date: new Date(),
  open: true,
  id: 'id1235'
};

<>
  <Email 
    name={emailData1.name}
    avatar={emailData1.avatar}
    title={emailData1.title}
    date={emailData1.date}
    open={emailData1.open}
    onClick={() => {}}
    id={emailData1.id}>
    { emailData1.content }
  </Email>
  <Email 
    name={emailData2.name}
    avatar={emailData2.avatar}
    title={emailData2.title}
    date={emailData2.date}
    open={emailData2.open}
    onClick={() => {}}
    id={emailData2.id}>
    { emailData2.content }
  </Email>
  <Email 
    name={emailData3.name}
    avatar={emailData3.avatar}
    title={emailData3.title}
    date={emailData3.date}
    open={emailData3.open}
    onClick={() => {}}
    id={emailData3.id}>
    { emailData3.content }
  </Email>
</>
```