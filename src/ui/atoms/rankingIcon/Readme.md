Example of RankingIcon
```jsx harmony
import { RankingIcon } from 'ui/atoms';
import { AllocateResultsRelationRanking } from 'app/projectDetails/sections/allocateResultsDetails/AllocateResultsDetails.types';

const rankings = [AllocateResultsRelationRanking.Gold, AllocateResultsRelationRanking.Silver, AllocateResultsRelationRanking.Bronze];
const count = {
  gold: 25,
};

<>
  <RankingIcon rankings={rankings} count={count} />
  <RankingIcon rankings={rankings} count={count} showCount />
</>
```