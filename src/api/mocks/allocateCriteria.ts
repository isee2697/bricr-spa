import { PricingType, TeamRight } from 'api/types';
import { AllocateCriteriaItem } from 'app/settings/sections/allocateCriteria/allocateCriteriaList/AllocateCriteriaList.types';

export const ALLOCATE_CRITERIA_ITEMS: AllocateCriteriaItem[] = [
  {
    id: '0001',
    title: 'Allocate 1 object for rent',
    typeOfProperty: TeamRight.Residential,
    price: PricingType.Rent,
    used: 350,
  },
  {
    id: '0002',
    title: 'Allocate all objects in project for sale',
    typeOfProperty: TeamRight.Commercial,
    price: PricingType.Sale,
    used: 90,
  },
];
