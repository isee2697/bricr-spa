import { FormSectionProps } from 'ui/organisms/formSection/FormSection.types';

export type CardWithLinkedItemProps = FormSectionProps & {
  emptyStateTextFirst: string;
  emptyStateTextSecond?: string;
  emoji: string;
  showEmptyState?: boolean;
  onLinkButtonClick: VoidFunction;
  linkButtonText: string;
};
