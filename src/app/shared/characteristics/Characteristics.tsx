import React, { useState } from 'react';

import { ProjectDetailsHeader } from 'app/projectDetails/projectDetailsHeader/ProjectDetailsHeader';
import { Page } from 'ui/templates';
import { Button, Grid, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { FormSection } from 'ui/organisms';
import { CharacteristicsSections } from 'api/types';
import { EnergyForm } from 'app/shared/energy/EnergyForm';
import { EditIcon } from 'ui/atoms/icons';
import { InfoSection } from 'ui/molecules';
import { ObjectType } from 'app/shared/characteristics/forms/ObjectType';

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
  availableSections,
  entityType,
  isSidebarVisible,
  onSidebarOpen,
}: CharacteristicsProps) => {
  const { formatMessage } = useLocale();
  const [isModalOpened, setModalOpened] = useState(false);
  const [newlyAddedCards, setNewlyAddedCards] = useState<CharacteristicsSections[]>([]);

  const onModalClose = (sections?: CharacteristicsSections[]) => {
    if (sections) {
      setNewlyAddedCards(sections);
    }

    setModalOpened(false);
  };

  const setPropsForType = (type: CharacteristicsSections) => {
    if (newlyAddedCards?.includes(type)) {
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
  const getFormByType = (type: CharacteristicsSections) => {
    const props = setPropsForType(type);
    const sections = {
      [CharacteristicsSections.ProjectMarketing]: <ProjectMarketing {...props} />,
      [CharacteristicsSections.Measurements]: <Measurements {...props} />,
      [CharacteristicsSections.Energy]: <EnergyForm namePrefix="energy" {...props} />,
      [CharacteristicsSections.Phase]: <Phase phase={projectPhase} {...props} />,
      [CharacteristicsSections.AccountManagers]: <AccountManagers {...props} />,
      [CharacteristicsSections.ClientInformation]: <ClientInformation {...props} />,
      [CharacteristicsSections.IdentificationNumber]: (
        <IdentificationNumberFormContainer items={identificationNumbers} {...props} />
      ),
      [CharacteristicsSections.AttentionField]: <Attention {...props} />,
      [CharacteristicsSections.InvoiceDetails]: <InvoiceDetails {...props} />,
      [CharacteristicsSections.ObjectTypes]: <ObjectType {...props} />,
    };

    return sections[type];
  };

  const renderContent = () => {
    if (!characteristicsSections.length)
      return (
        <Grid item xs={12}>
          <FormSection isEditable={false} title="">
            <InfoSection emoji="????">
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
        isSidebarVisible={isSidebarVisible}
        onSidebarOpen={onSidebarOpen}
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
          availableSections={availableSections}
          entityType={entityType}
        />
      )}
    </>
  );
};
