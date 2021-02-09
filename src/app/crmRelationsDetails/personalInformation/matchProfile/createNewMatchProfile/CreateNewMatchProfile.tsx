import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { Page } from 'ui/templates';
import { useLocale } from 'hooks';
import { CrmRelationsDetailsHeader } from 'app/crmRelationsDetails/crmRelationsDetailsHeader/CrmRelationsDetailsHeader';
import { Box, IconButton } from 'ui/atoms';
import { ExitIcon, HomeIcon, MenuIcon } from 'ui/atoms/icons';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { ListOptionsMenu } from 'ui/molecules';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';
import { MatchProfile, UpdateMatchProfileInput, MatchPropertyType } from 'api/types';

import { Location } from './location/Location';
import { Extras } from './extras/Extras';
import { General } from './general/General';
import { CreateNewMatchProfileProps } from './CreateNewMatchProfile.types';
import { EstateType } from './estateType/EstateType';
import { CommercialEstateType } from './commercialEstateType/CommercialEstateType';
import { Measurements } from './measurements/Measurements';
import { SurfaceProperty } from './surfaceProperty/SurfaceProperty';
import { SurfacePlot } from './surfacePlot/SurfacePlot';
import { CharacteristicsProperty } from './characteristicsProperty/CharacteristicsProperty';
import { Characteristics } from './characteristics/Characteristics';
import { Pricing } from './pricing/Pricing';
import { Outside } from './outside/Outside';
import { Garden } from './garden/Garden';
import { Conditions } from './conditions/Conditions';
import { Services } from './services/Services';
import { RevenueAndExploitation } from './revenueAndExploitation/RevenueAndExploitation';
import { Tags } from './tags/Tags';

export const CreateNewMatchProfile = ({ path, onSidebarOpen, isSidebarVisible }: CreateNewMatchProfileProps) => {
  const { formatMessage } = useLocale();
  const { push } = useHistory();
  const { id } = useParams<{ id: string }>();
  const [matchProfile, setMatchProfile] = useState<MatchProfile>();

  const handleSave = async (values: UpdateMatchProfileInput) => {
    setMatchProfile({
      ...values,
      id: '0001',
      crmId: '0001',
      companyId: '0001',
    });

    return undefined;
  };

  return (
    <>
      <CrmRelationsDetailsHeader
        onSidebarOpen={onSidebarOpen}
        isSidebarVisible={isSidebarVisible}
        actions={
          <Box display="flex">
            <ListOptionsMenu onDeleteClick={() => {}} hideEditButton>
              <ListOptionsMenuItem
                title={formatMessage({
                  id: 'crm.details.personal_information_match_profile.active_inactive',
                })}
                icon={<HomeIcon />}
              />
            </ListOptionsMenu>
            <IconButton size="small" variant="rounded">
              <MenuIcon />
            </IconButton>
            <Box ml={3} />
            <IconButton size="small" variant="rounded" onClick={() => push(joinUrlParams(path, { id }))}>
              <ExitIcon />
            </IconButton>
          </Box>
        }
      />
      <Page title={formatMessage({ id: 'crm.details.personal_information_match_profile.title' })} titleActions={<></>}>
        <General onSave={handleSave} />
        {(!matchProfile || matchProfile.propertyType !== MatchPropertyType.Commercial) && (
          <>
            <EstateType />
            <Measurements onSave={handleSave} />
            <SurfacePlot onSave={handleSave} />
            <CharacteristicsProperty onSave={handleSave} />
            <Pricing onSave={handleSave} />
            <Outside onSave={handleSave} />
            <Garden onSave={handleSave} />
            <Tags onSave={handleSave} />
            <Location onSave={handleSave} />
            <Extras onSave={handleSave} />
          </>
        )}
        {matchProfile && matchProfile.propertyType === MatchPropertyType.Commercial && (
          <>
            <CommercialEstateType />
            <SurfaceProperty onSave={handleSave} />
            <SurfacePlot onSave={handleSave} />
            <Conditions onSave={handleSave} />
            <Characteristics onSave={handleSave} />
            <Services onSave={handleSave} />
            <RevenueAndExploitation onSave={handleSave} />
            <Tags onSave={handleSave} />
            <Location onSave={handleSave} />
          </>
        )}
      </Page>
    </>
  );
};
