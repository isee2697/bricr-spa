import { Dispatch } from 'react';

export type ClaimSpaceTypes = {
  isClaimed?: boolean;
  suggestions?: string[];
  spaceName?: string;
};

export type ClaimSpaceDispatchContextType = Dispatch<ClaimSpaceTypes>;
