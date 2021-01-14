import React from 'react';

import { FilePermission } from 'api/types';
import { QuestionStepStatus } from '../../documentDetails/documentQuestionnaire/DocumentQuestionnaire.types';

import { DocumentTimeline } from './DocumentTimeline';
import { DocumentTimelineContainerProps, DocumentTimelineItem } from './DocumentTimeline.types';

export const DocumentTimelineContainer = ({ type }: DocumentTimelineContainerProps) => {
  const mockData: DocumentTimelineItem[] = [
    {
      users: [
        {
          firstName: 'Anna',
          lastName: 'Kowalska',
          image: {
            url: 'http://placeimg.com/24/24/people',
            key: 'testKey',
            id: 'imageId',
            fileName: 'userProfile',
            fileType: 'jpg',
            status: 1,
            permission: FilePermission.Public,
          },
        },
      ],
      steps: [
        {
          id: 'step-1',
          title: 'Invited',
          status: QuestionStepStatus.Completed,
          modifiedAt: new Date().toISOString(),
        },
        {
          id: 'step-2',
          title: 'Started',
          status: QuestionStepStatus.InProgress,
          modifiedAt: new Date().toISOString(),
        },
        {
          id: 'step-3',
          title: 'Frozen',
          status: QuestionStepStatus.Pending,
        },
      ],
      isActive: true,
    },
    {
      users: [
        {
          firstName: 'Anna',
          lastName: 'Kowalska',
          image: {
            url: 'http://placeimg.com/24/24/people',
            key: 'testKey',
            id: 'imageId',
            fileName: 'userProfile',
            fileType: 'jpg',
            status: 1,
            permission: FilePermission.Public,
          },
        },
      ],
      steps: [
        {
          id: 'step-1',
          title: 'Invited',
          status: QuestionStepStatus.Completed,
          modifiedAt: new Date().toISOString(),
        },
        {
          id: 'step-2',
          title: 'Started',
          status: QuestionStepStatus.Completed,
          modifiedAt: new Date().toISOString(),
        },
        {
          id: 'step-3',
          title: 'Frozen',
          status: QuestionStepStatus.Completed,
          modifiedAt: new Date().toISOString(),
        },
      ],
      isActive: false,
    },
  ];

  return <DocumentTimeline type={type} data={mockData} />;
};
