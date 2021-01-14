import { Layout } from 'react-grid-layout';

export type DashboardsProps = {
  cards: Layout[];
  onUpdateLayout: (newLayout: Layout[]) => void;
};

export enum DashboardType {
  LeadGeneration = 'LeadGeneration',
  EmailOverview = 'EmailOverview',
  Marketing = 'Marketing',
  Sales = 'Sales',
  PortfolioHealth = 'PortfolioHealth',
}
