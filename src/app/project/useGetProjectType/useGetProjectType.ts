import { useLocation } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';
import { PimTypes } from 'app/pim/dictionaries';
import { ProjectType } from 'api/types';

export const useGetProjectType = () => {
  const { pathname } = useLocation();
  const path = pathname.replace(`${AppRoute.pim}/`, '');

  const pimType = PimTypes.find(item => item.name === path);

  return pimType?.projectType ?? ProjectType.NewConstruction;
};
