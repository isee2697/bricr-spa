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
  title: 'Lorem ipsum dolor sit amet.',
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
    isHighlighted={true}
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

  <br/><br/>

  <PropertyItem 
    title={propertyData.title}
    image={`${propertyData.image}?t=2`} 
    date={propertyData.date} 
    labels={propertyData.labels}
    discountPrice={propertyData.discountPrice}
    price={propertyData.price}
    pricePerMeter={propertyData.pricePerMeter}
    isHighlighted={false}
    isAlert={false}
    onCheck={() => {}}
    onMenuClick={() => {}}
    stage={6}
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