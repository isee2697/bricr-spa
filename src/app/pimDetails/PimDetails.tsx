import React from 'react';
import { useParams } from 'react-router-dom';

export const PimDetails = () => {
  const { uid } = useParams<{ uid: string }>();

  return <>Pim details TBD - {uid}</>;
};
