import React from 'react';
import { AgendaSection } from 'ui/organisms';

import { DashboardAgendaProps } from './DashboardAgenda.types';

export const DashboardAgenda = ({ agendaItems }: DashboardAgendaProps) => (
  <AgendaSection data={agendaItems} onMoreClick={() => {}} onAddClick={() => {}} />
);
