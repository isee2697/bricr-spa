import React, { useState } from 'react';

import { Pim } from './Pim';

// @TODO - provide data from api and add sorting/pagination state

export const PimContainer = () => {
  const [status, setStatus] = useState('active');
  const [type, setType] = useState('sale');

  return <Pim status={status} onStatusChange={setStatus} type={type} onTypeChange={setType} />;
};
