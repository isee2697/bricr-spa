import React from 'react';

import { useClaimSpaceHook } from '../../hooks/useClaimSpaceHook/useClaimSpaceHook';

export const RegisterInfoScreen = () => {
  const { isClaimed, spaceName } = useClaimSpaceHook();

  if (isClaimed !== undefined) {
    return <>CLAIMED {spaceName} </>;
  }

  return <></>;
};
