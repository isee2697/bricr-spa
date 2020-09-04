import { Dispatch } from 'react';

export type ClaimSpaceTypes = {
  isClaimed?: boolean;
  suggestions?: string[];
  spaceName?: string;
  isCheckingSpaceName?: boolean;
};

export type ClaimSpaceDispatchContextType = Dispatch<ClaimSpaceTypes>;
