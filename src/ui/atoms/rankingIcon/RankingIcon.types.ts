import { AllocateResultsRelationRanking } from 'app/projectDetails/sections/allocateResultsDetails/AllocateResultsDetails.types';

export type RankingIconProps = {
  rankings: AllocateResultsRelationRanking[];
  showCount?: boolean;
  count?: RankingCount;
  showActiveOnly?: boolean;
};

export type RankingCount = {
  gold: number;
  silver: number;
  bronze: number;
};
