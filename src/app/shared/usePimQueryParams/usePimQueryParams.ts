import { useQueryParam } from 'use-query-params';
import { ActionTabStatus } from '../../../ui/molecules/actionTabs/ActionTabs.types';
import { ListPimsFilters, PricingType } from '../../../api/types';

type defaultValues = {
  status?: ActionTabStatus;
  type?: string;
  pricingType?: string;
};

export const usePimQueryParams = (defaults: defaultValues) => {
  const [status = defaults.status || 'active', setStatus] = useQueryParam<ActionTabStatus>('status');
  const [type = defaults.type || 'property', setType] = useQueryParam<string>('type');
  const [pricingType = defaults.pricingType || 'both', setPricingType] = useQueryParam<string>('pricingType');
  const priceTypeFilter: ListPimsFilters = pricingType !== 'both' ? { pricingType: pricingType as PricingType } : {};

  return {
    status,
    setStatus,
    type,
    setType,
    pricingType,
    setPricingType,
    priceTypeFilter,
  };
};
