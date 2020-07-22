import React, { useState } from 'react';

import { ProjectDetailsHeader } from 'app/projectDetails/projectDetailsHeader/ProjectDetailsHeader';
import { Page } from 'ui/templates';
import { Button, Grid, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { FormSection } from 'ui/organisms';
import { NcpCharacteristicsSections } from 'api/types';
import { EnergyForm } from 'app/shared/energy/EnergyForm';
import { EditIcon } from 'ui/atoms/icons';
import { InfoSection } from 'ui/molecules';

import { Attention } from './forms/Attention';
import { Measurements } from './forms/Measurements';
import { ProjectMarketing } from './forms/ProjectMarketing';
import { InvoiceDetails } from './forms/InvoiceDetails';
import { IdentificationNumberFormContainer } from './forms/IdentificationNumberFormContainer';
import { Phase } from './forms/Phase';
import { AccountManagers } from './forms/AccountManagers';
import { ClientInformation } from './forms/ClientInformation';
import { AdditionalInformationModalContainer } from './additionalInformationModal/AdditionalInformationModalContainer';
import { CharacteristicsProps } from './Characteristics.types';

export const Characteristics = ({
  dateUpdated,
  updatedBy,
  characteristicsSections,
  identificationNumbers,
  projectPhase,
}: CharacteristicsProps) => {
  const { formatMessage } = useLocale();
  const [isModalOpened, setModalOpened] = useState(false);
  const [newlyAddedCards, setNewlyAddedCards] = useState<NcpCharacteristicsSections[]>([]);

  const onModalClose = (sections?: NcpCharacteristicsSections[]) => {
    if (sections) {
      setNewlyAddedCards(sections);
    }

    setModalOpened(false);
  };

  const setPropsForType = (type: NcpCharacteristicsSections) => {
    if (newlyAddedCards.includes(type)) {
      return {
        isInitEditing: true,
        isInitExpanded: true,
      };
    }

    return {
      isInitEditing: false,
      isInitExpanded: false,
    };
  };
  const getFormByType = (type: NcpCharacteristicsSections) => {
    const props = setPropsForType(type);
    const sections = {
      [NcpCharacteristicsSections.ProjectMarketing]: <ProjectMarketing {...props} />,
      [NcpCharacteristicsSections.Measurements]: <Measurements {...props} />,
      [NcpCharacteristicsSections.Energy]: <EnergyForm namePrefix="energy" {...props} />,
      [NcpCharacteristicsSections.Phase]: <Phase phase={projectPhase} {...props} />,
      [NcpCharacteristicsSections.AccountManagers]: <AccountManagers {...props} />,
      [NcpCharacteristicsSections.ClientInformation]: <ClientInformation {...props} />,
      [NcpCharacteristicsSections.IdentificationNumber]: (
        <IdentificationNumberFormContainer items={identificationNumbers} {...props} />
      ),
      [NcpCharacteristicsSections.AttentionField]: <Attention {...props} />,
      [NcpCharacteristicsSections.InvoiceDetails]: <InvoiceDetails {...props} />,
    };

    return sections[type];
  };

  const renderContent = () => {
    if (!characteristicsSections.length)
      return (
        <Grid item xs={12}>
          <FormSection isEditable={false} title="">
            <InfoSection emoji="🤔">
              <Typography variant="h3">
                {formatMessage({ id: 'project_details.characteristics.empty_line_1' })}
              </Typography>
              <Typography variant="h3">
                {formatMessage({ id: 'project_details.characteristics.empty_line_2' })}
              </Typography>
            </InfoSection>
          </FormSection>
        </Grid>
      );

    return characteristicsSections.map(section => (
      <Grid item xs={12} key={section}>
        {getFormByType(section)}
      </Grid>
    ));
  };

  return (
    <>
      <ProjectDetailsHeader
        action={
          <Button
            color="primary"
            startIcon={<EditIcon color="inherit" />}
            variant="contained"
            onClick={() => setModalOpened(true)}
            size="small"
          >
            {formatMessage({ id: 'project_details.characteristics.additional_information' })}
          </Button>
        }
      />
      <Page
        title={formatMessage({ id: 'project_details.characteristics.title' })}
        name="characteristicsDescription"
        placeholder="project_details.characteristics.description_placeholder"
        dateUpdated={dateUpdated}
        updatedBy={updatedBy}
      >
        {renderContent()}
      </Page>
      {isModalOpened && (
        <AdditionalInformationModalContainer
          isOpened={isModalOpened}
          onClose={onModalClose}
          sections={characteristicsSections}
        />
      )}
    </>
  );
};
