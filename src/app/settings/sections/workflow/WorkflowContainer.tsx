import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

import { useLayout } from 'context/layout';
import { AppRoute } from 'routing/AppRoute.enum';
import {
  ArrowDownIcon,
  SearchIcon,
  UserIcon,
  DashboardIcon,
  SeeIcon,
  UploadIcon,
  SaleIcon,
  SettingsIcon,
} from 'ui/atoms/icons';

import { Workflow } from './Workflow';
import { WorkflowSidebarGroup } from './workflowSidebar/WorkflowSidebar.types';

const triggersGroups: WorkflowSidebarGroup[] = [
  {
    title: 'Group 1',
    items: [
      {
        icon: <SearchIcon color={'inherit'} />,
        title: 'Make an appointment',
      },
      {
        icon: <UserIcon color={'inherit'} />,
        title: 'Different trigger',
      },
      {
        icon: <DashboardIcon color={'inherit'} />,
        title: 'Trigger 1',
      },
      {
        icon: <SeeIcon color={'inherit'} />,
        title: 'Trigger 2',
      },
    ],
  },
];

const actionsGroups: WorkflowSidebarGroup[] = [
  {
    title: 'Group 1',
    items: [
      {
        icon: <UploadIcon color={'inherit'} />,
        title: 'Send email',
      },
      {
        icon: <SaleIcon color={'inherit'} />,
        title: 'Action 1',
      },
      {
        icon: <ArrowDownIcon color={'inherit'} />,
        title: 'Action 2',
      },
      {
        icon: <SettingsIcon color={'inherit'} />,
        title: 'Action 3',
      },
    ],
  },
];

export const WorkflowContainer = () => {
  const { setFullscreen } = useLayout();
  const { state } = useLocation<{ iconName: string }>();
  const { id } = useParams<{ id: string }>();
  const { push } = useHistory();
  const [sections, setSections] = useState([{ title: 'Workflow section 1' }]);

  useEffect(() => {
    setFullscreen(true);
  }, [setFullscreen]);

  const onToggleFullScreen = (isFullScreen: boolean) => {
    setFullscreen(isFullScreen);
  };

  const goBack = () => {
    push(AppRoute.settings + '/workflowTemplates');
    setFullscreen(false);
  };

  const handleAddSection = async () => {
    setSections(s => {
      return [...s, { title: `Workflow section ${s.length + 1}` }];
    });

    return undefined;
  };

  return (
    <Workflow
      onToggleFullScreen={onToggleFullScreen}
      name={id}
      iconName={state.iconName}
      goBack={goBack}
      actionsGroups={actionsGroups}
      triggersGroups={triggersGroups}
      onAddSection={handleAddSection}
      sections={sections}
    />
  );
};
