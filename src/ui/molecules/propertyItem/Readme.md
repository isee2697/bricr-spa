Example of Property Item component

```jsx harmony
import { Tabs, Tab, Box, Chip } from 'ui/atoms';
import { Order, PropertyStage, PropertyItem } from 'ui/molecules';
import { useTheme } from '@material-ui/core/styles';

const theme = useTheme();
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

const PropertyStageItems = [
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
  labels: ['90 m²','3 kamers','Apartament'],
  id: 'test1',
  discountPrice: 385000,
  price: 375500,
  pricePerMeter: 1399,
};

<>
  <PropertyItem 
    title={propertyData.title}
    image={propertyData.image} 
    date={propertyData.date} 
    labels={propertyData.labels}
    discountPrice={propertyData.discountPrice}
    price={propertyData.price}
    pricePerMeter={propertyData.pricePerMeter}
    isAlert={true}
    onMenuClick={() => {}}
    stage={4}
    categories={
      <div>
        <Box 
          color={theme.palette.orange.main}
          fontSize={theme.typography.h5.fontSize}
          lineHeight={theme.typography.h5.lineHeight}
          fontWeight={theme.typography.fontWeightBold}
          textAlign="end"
          mb={.5}
          >Wait for owner</Box>
        <Box display="flex">
          <Box mr={1}>
            <Chip variant="outlined" color="primary" label="sale" size="small"/>
          </Box>
          <Box>
            <Chip variant="outlined" color="primary" label="rent" size="small"/>
          </Box>
        </Box>
      </div>
    }>
      <PropertyStage items={PropertyStageItems} activeItem={2} />
  </PropertyItem>
</>
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
  labels: ['90 m²','3 kamers','Apartament'],
  id: 'test1',
  discountPrice: 385000,
  price: 375500,
  pricePerMeter: 1399,
  isArchived: true,
};

<>
  <PropertyItem 
    title="Van der Meerstraat 45, Amersfoort"
    image={`${propertyData.image}?t=2`} 
    date={twoHoursAgo.toISOString()} 
    labels={propertyData.labels}
    discountPrice={propertyData.discountPrice}
    price={propertyData.price}
    pricePerMeter={propertyData.pricePerMeter}
    isArchived={true}
    onMenuClick={() => {}}
    stage={4}
    categories={
      <div>
        <Box 
          fontSize={theme.typography.h5.fontSize}
          lineHeight={theme.typography.h5.lineHeight}
          textAlign="end"
          mb={.5}
          >04-11-2019</Box>
        <Box display="flex" justifyContent="flex-end">
          <Box color={theme.palette.green.main}>
            <Chip variant="outlined" fontcolor={theme.palette.green.main} label="sold" size="small"/>
          </Box>
        </Box>
      </div>
    }>
    <Box display="flex" mt={1}>
      <Box display="flex" flexShrink={0} flexBasis={theme.spacing(22)} flexDirection="column">
        <Box fontSize={theme.typography.h5.fontSize} fontWeight={theme.typography.fontWeightBold}>
          Formal owners
        </Box>
        <Box color={theme.palette.gray.main}>
          <Typography variant="h5">
            G. De Gracht | W. Van Hoof
          </Typography>
        </Box>
      </Box>
      <Box ml={1.5} display="flex" flexShrink={0} flexDirection="column">
        <Box fontSize={theme.typography.h5.fontSize} fontWeight={theme.typography.fontWeightBold}>
          Buyers
        </Box>
        <Box color={theme.palette.gray.main}>
          <Typography variant="h5">
            H.Hendriks | L. Lemmers-van Liempd
          </Typography>
        </Box>
      </Box>
    </Box>
  </PropertyItem>
</>
```