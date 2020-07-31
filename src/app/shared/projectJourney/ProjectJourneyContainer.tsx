import React from 'react';
import { useQueryParam } from 'use-query-params';

import { usePimsSorting } from 'app/shared/usePimsSorting/usePimsSorting';
import { AutosaveForm } from 'ui/organisms';

import { ProjectJourney } from './ProjectJourney';
import {
  ProjectJourneyActionTabStatus,
  ProjectJourneyContainerProps,
  ProjectJourneyData,
} from './ProjectJourney.types';

const data: ProjectJourneyData = {
  items: [
    {
      id: '1',
      name: 'Ludwig Mies van der Rohe',
      phoneNumber: '06-48764044',
      email: 'miesvanderrohe@gmail.com',
      partner: {
        name: 'Anna Kowalska',
        image: 'http://placeimg.com/176/112/arch',
      },
      manager: {
        name: 'Christian van Gils',
        image: 'http://placeimg.com/176/112/arch',
      },
      role: 'Buyer',
      image: 'http://placeimg.com/176/112/arch',
    },
    {
      id: '2',
      name: 'Ludwig Mies van der Rohe',
      phoneNumber: '06-48764044',
      email: 'miesvanderrohe@gmail.com',
      role: 'Buyer',
      image: 'http://placeimg.com/176/112/arch',
    },
  ],
  projectLogo: 'http://placeimg.com/24/76/arch',
  phase: 'De werf',
  designation: 'Tower H',
};

export const ProjectJourneyContainer = (props: ProjectJourneyContainerProps) => {
  const [status = 'matches', setStatus] = useQueryParam<ProjectJourneyActionTabStatus>('status');
  const amounts = {
    actionRequired: 1,
    matches: 6,
    interests: 4,
  };
  const { sorting } = usePimsSorting();

  return (
    <AutosaveForm onSave={() => Promise.resolve(undefined)}>
      <ProjectJourney
        data={data}
        status={status}
        onStatusChange={setStatus}
        amounts={amounts}
        sorting={sorting}
        {...props}
      />
    </AutosaveForm>
  );
};
