import React from 'react';

import { Card, CardContent, Typography } from 'ui/atoms';
import { useLocale, useModalDispatch, useModalState } from 'hooks';
import { AddIcon } from 'ui/atoms/icons';
import { InfoSection } from 'ui/molecules';
import { Page } from 'ui/templates';

import { LvzPropertyProps } from './LvzProperty.types';
import { AddLvzPropertyGroupModal } from './addLvzPropertyGroupModal/AddLvzPropertyGroupModal';
import { LzvPropertyItem } from './lzvPropertyItem/LzvPropertyItem';

export const LvzProperty = ({ template, groups, onAddLvzGroup }: LvzPropertyProps) => {
  const { formatMessage } = useLocale();
  const { open, close } = useModalDispatch();
  const { isOpen: isModalOpen } = useModalState('add-lvz-property-group');

  return (
    <Page
      showHeader
      title={template.name}
      titleActions={[]}
      headerProps={{
        actionIcon: <AddIcon color="inherit" />,
        actionText: formatMessage({ id: 'dms.templates.add_lvz_group' }),
        onAction: () => open('add-lvz-property-group'),
      }}
    >
      {groups.length > 0 ? (
        groups.map((group, index) => <LzvPropertyItem key={index} group={group} />)
      ) : (
        <Card>
          <CardContent>
            <InfoSection emoji="🤔">
              <Typography variant="h3">
                {formatMessage({ id: 'settings.documents.lvz_property.empty.title' })}
              </Typography>
              <Typography variant="h3">
                {formatMessage({ id: 'settings.documents.lvz_property.empty.description' })}
              </Typography>
            </InfoSection>
          </CardContent>
        </Card>
      )}
      <AddLvzPropertyGroupModal
        isOpened={isModalOpen}
        onClose={() => close('add-lvz-property-group')}
        onSubmit={onAddLvzGroup}
      />
    </Page>
  );
};
