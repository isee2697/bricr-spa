import { PromiseFunction } from 'app/shared/types';
import { SalesLeadInterest } from '../salesLeads/SalesLeads.types';

export type AddSalesLeadModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onAddNewSalesLead: PromiseFunction<AddSalesLeadBody>;
};

export type AddSalesLeadBody = {
  firstName: string;
  initials: string;
  lastName: string;
  email: string;
  phone: string;
  type: 'partner' | 'no_partner' | 'unknown';
  partnerFirstName?: string;
  partnerInitials?: string;
  partnerLastName?: string;
  partnerEmail?: string;
  partnerPhone?: string;
  typeOfInterest: SalesLeadInterest;
  extraDescription: string;
};
