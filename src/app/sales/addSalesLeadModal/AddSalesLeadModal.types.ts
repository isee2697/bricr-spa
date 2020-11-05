import { PromiseFunction } from 'app/shared/types';
import { SalesLeadInterest } from '../salesLeads/SalesLeads.types';

export type AddSalesLeadModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onAddNewSalesLead: PromiseFunction<AddSalesLeadBody>;
};

export type AddSalesLeadBody = {
  firstName: string;
  insertion: string;
  lastName: string;
  email: string;
  phone: string;
  type: 'partner' | 'no_partner' | 'unknown';
  partnerFirstName?: string;
  partnerInsertion?: string;
  partnerLastName?: string;
  partnerEmail?: string;
  partnerPhone?: string;
  typeOfInterest: SalesLeadInterest;
  extraDescription: string;
};
