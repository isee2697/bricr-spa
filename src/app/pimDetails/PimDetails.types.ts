import { PimDetailsQueryHookResult, Pim, PimCadastreQuery, PimServicesQuery, GetPimOutsideQuery } from 'api/types';

export type PimDetailsSectionProps = {
  isSidebarVisible: boolean;
  onOpenSidebar: VoidFunction;
  title?: string;
  pim?: Pim;
};

export type PimDetailsProps = Pick<PimDetailsQueryHookResult, 'loading' | 'error' | 'data'> & {
  servicesData?: PimServicesQuery;
  cadastreData?: PimCadastreQuery;
  outsideData?: GetPimOutsideQuery;
};
