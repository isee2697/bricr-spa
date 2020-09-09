import React, { useState } from 'react';

import { InfoCardPage } from 'ui/templates';
import { Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { CreateTeamModalContainer } from 'app/settings/sections/teams/modals/CreateTeamModalContainer';

export const TeamsGeneral = ({ hasTeams }: { hasTeams: boolean }) => {
  const { formatMessage } = useLocale();
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <InfoCardPage
        cardTitle={formatMessage({ id: 'settings.teams.card_title' })}
        infoEmoji="👨‍👦‍👦"
        emptyTextFirst={formatMessage({ id: 'settings.teams.empty_title' })}
        emptyTextSecond={formatMessage({ id: 'settings.teams.empty_description' })}
        infoTextFirst={formatMessage({ id: 'settings.teams.info_title' })}
        infoTextSecond={formatMessage({ id: 'settings.teams.info_description' })}
        emptyEmoji="😢"
        isEmpty={!hasTeams}
        title={formatMessage({ id: 'settings.teams.add' })}
        showHeader
        headerProps={{ actionText: formatMessage({ id: 'settings.teams.add' }), onAction: () => setModalOpen(true) }}
        titleActions={<></>}
      >
        {hasTeams && <Typography>{formatMessage({ id: 'settings.teams.info_explenation' })}</Typography>}
      </InfoCardPage>
      <CreateTeamModalContainer isOpened={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};
