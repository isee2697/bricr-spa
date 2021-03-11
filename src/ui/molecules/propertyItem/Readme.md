Example of Property Item component

```jsx harmony
import { Tabs, Tab, Box, Chip } from 'ui/atoms';
import { Order, PropertyItem, ListOptionsMenu } from 'ui/molecules';
import { useTheme } from '@material-ui/core/styles';

const theme = useTheme();
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

const propertyStageItems = [
  { title: 'Acquisition', date: '10-10-2019' },
  { title: 'Order', date: '28-10-2019' },
  { title: 'List up', date: '29-10-2019' },
  { title: 'Reactions' },
  { title: 'Bidding' },
  { title: 'Sign' },
];

const propertyData = {
  title: 'Isenburgstraat 36, Breda',
  image: 'http://placeimg.com/176/112/arch',
  date: yesterday.toISOString(),
  labels: ['90 m²', '3 kamers', 'Apartament'],
  id: 'test1',
  discountPrice: 385000,
  salePrice: 375500,
  rentPrice: 1399,
};

<>
  <PropertyItem
    title={propertyData.title}
    image={propertyData.image}
    date={propertyData.date}
    labels={propertyData.labels}
    discountPrice={propertyData.discountPrice}
    salePrice={propertyData.salePrice}
    rentPrice={propertyData.rentPrice}
    alert="No more house view scheduling"
    completeness={0.6}
    status="Wait for owner"
    categories={['Sale', 'Order']}
    stageItems={propertyStageItems}
    stageIndex={2}
    actionsMenu={
      <ListOptionsMenu id={`test-menu`} />
    }
  />
</>;
```

Example of Archived Property Item component

```jsx harmony
import { Tabs, Tab, Box, Chip, Typography } from 'ui/atoms';
import { Order, PropertyStage, PropertyItem } from 'ui/molecules';
import { useTheme } from '@material-ui/core/styles';

const theme = useTheme();
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
const twoHoursAgo = new Date();
twoHoursAgo.setHours(twoHoursAgo.getHours() - 2);

const propertyData = {
  title: 'Lorem ipsum dolor sit amet.',
  image: 'http://placeimg.com/176/112/arch',
  date: yesterday.toISOString(),
  labels: ['90 m²', '3 kamers', 'Apartament'],
  id: 'test1',
  discountPrice: 385000,
  salePrice: 375500,
  rentPrice: 1399,
  isArchived: true,
};

<>
  <PropertyItem
    title="Van der Meerstraat 45, Amersfoort"
    image={`${propertyData.image}?t=2`}
    date={twoHoursAgo.toISOString()}
    labels={propertyData.labels}
    discountPrice={propertyData.discountPrice}
    salePrice={propertyData.salePrice}
    rentPrice={propertyData.rentPrice}
    isArchived={true}
    status="04-11-2019"
    categories={['Sold']}
    formerOwners="G. De Gracht | W. Van Hoof"
    buyers="H.Hendriks | L. Lemmers-van Liempd"
  />
</>;
```
