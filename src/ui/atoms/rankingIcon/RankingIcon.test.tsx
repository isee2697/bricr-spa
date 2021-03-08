import React from 'react';

import { render } from 'tests';
import { AllocateResultsRelationRanking } from 'app/projectDetails/sections/allocateResultsDetails/AllocateResultsDetails.types';

import { RankingIcon } from './RankingIcon';

describe('RankingIcon', () => {
  it('render without count', () => {
    const rankings = [
      AllocateResultsRelationRanking.Gold,
      AllocateResultsRelationRanking.Silver,
      AllocateResultsRelationRanking.Bronze,
    ];
    const count = {
      gold: 25,
    };

    const { getByText } = render(<RankingIcon rankings={rankings} count={count} />);

    expect(getByText('1')).toBeTruthy();
    expect(getByText('2')).toBeTruthy();
    expect(getByText('3')).toBeTruthy();
  });

  it('render with count', () => {
    const rankings = [
      AllocateResultsRelationRanking.Gold,
      AllocateResultsRelationRanking.Silver,
      AllocateResultsRelationRanking.Bronze,
    ];
    const count = {
      gold: 25,
    };

    const { getByText } = render(<RankingIcon rankings={rankings} count={count} showCount />);

    expect(getByText('1')).toBeTruthy();
    expect(getByText('2')).toBeTruthy();
    expect(getByText('3')).toBeTruthy();
    expect(getByText('25')).toBeTruthy();
  });

  it('render with showActiveOnly', () => {
    const rankings = [AllocateResultsRelationRanking.Gold, AllocateResultsRelationRanking.Bronze];
    const count = {
      gold: 25,
    };

    const { queryByText } = render(<RankingIcon rankings={rankings} count={count} showCount showActiveOnly />);

    expect(queryByText('2')).not.toBeInTheDocument();
  });
});
