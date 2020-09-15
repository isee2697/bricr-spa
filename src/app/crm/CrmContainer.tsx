import React, { useState } from 'react';

import { Crm } from './Crm';
import { CrmType } from './Crm.types';

export const CrmContainer = () => {
  const [type, setType] = useState<CrmType>(CrmType.Relations);

  return <Crm type={type} onTypeChange={setType}></Crm>;
};
