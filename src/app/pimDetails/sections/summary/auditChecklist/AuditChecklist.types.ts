import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { PimSummary } from '../Summary.types';

export type AuditChecklistProps = PimDetailsSectionProps & {
  summary: PimSummary;
};

export type AuditChecklistCardProps = {
  summary: PimSummary;
};
