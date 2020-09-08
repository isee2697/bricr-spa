import React, { useState } from 'react';

import { InfoCardPage } from 'ui/templates';
import { Button, NavBreadcrumb, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { CreateTeamModalContainer } from 'app/settings/sections/teams/modals/CreateTeamModalContainer';

export const TeamsGeneralContainer = ({ hasTeams }: { hasTeams: boolean }) => {
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
        title={formatMessage({ id: 'settings.teams.title' })}
        titleActions={
          <Button onClick={() => setModalOpen(true)} color={'primary'} variant="contained">
            {formatMessage({ id: 'settings.teams.add' })}
          </Button>
        }
      >
        {hasTeams && <Typography>{formatMessage({ id: 'settings.teams.info_explenation' })}</Typography>}
      </InfoCardPage>
      <CreateTeamModalContainer isOpened={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};
