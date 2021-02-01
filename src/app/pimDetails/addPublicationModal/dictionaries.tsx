import React from 'react';

import { SquareIcon } from 'ui/atoms/icons';
import { PublicationType } from '../sections/publication/Publication.types';

export const PublicationTypes = Object.keys(PublicationType).map(key => ({
  value: key,
  label: `dictionaries.publication_type.${key}`,
  icon: <SquareIcon />,
}));
