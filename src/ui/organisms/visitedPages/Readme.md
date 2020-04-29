Example of VisitedPages component

```jsx harmony
import { Box, Tabs, Tab, VisitedPage } from 'ui/atoms';
import { VisitedPages } from 'ui/organisms';

const visitedPagesData = [
  {
    category: "PIM",
    subCategory: "Sale",
    content: "Weerschijnvlinder 8: Prijzen",
  }, {
    category: "CRM",
    subCategory: "RELATIES",
    content: "C.G.M. van Gils: Documenten",
  }, {
    category: "CRM",
    subCategory: "RELATIES",
    content: "T. Wiegersma: EMF-Profiel",
  }, {
    category: "CRM",
    subCategory: "RELATIES",
    content: "P. Pietersen Tijdlin",
  }, {
    category: "PIM",
    subCategory: "Sale",
    content: "C.G.M. van Gils: Documenten",
  }, 
];

<>
  <VisitedPages 
    onMoreClick={() => {}} 
    onManageClick={() => {}}>
    <Box>
      {visitedPagesData.map(item => (
        <VisitedPage category={item.category} subCategory={item.subCategory}>
          { item.content }
        </VisitedPage>
      ))}
    </Box>
  </VisitedPages>
</>
```