import React, { useState } from 'react';

import { useLocale } from 'hooks';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { GenericField } from 'form/fields';
import { Box, Grid } from 'ui/atoms';
import { AllongeType } from '../DocumentContractFlow.types';
import { SubSectionHeader } from 'ui/molecules';

export function ContractAllongeForm() {
  const { formatMessage } = useLocale();
  const [allonges, setAllonges] = useState<AllongeType[]>([]);
  const [toggled, setToggled] = useState(0);

  return (
    <FormSection
      title={formatMessage({
        id: 'pim_details.documents.allonge',
      })}
      isExpandable
      isInitExpanded
      onAdd={() => {
        setAllonges([...allonges, { number: '', description: '' }]);
      }}
    >
      {editing => (
        <AutosaveForm onSave={() => Promise.resolve(undefined)}>
          {allonges.map((allongeItem, index) => (
            <React.Fragment key={index}>
              <SubSectionHeader
                toggled={toggled === index}
                onToggleClick={() => {
                  setToggled(index);
                }}
                onOptionsClick={() => {}}
              >
                {formatMessage({ id: 'pim_details.documents.allonge' })} {allongeItem.number}
              </SubSectionHeader>

              {toggled === index && (
                <Box mt={1}>
                  <Grid item xs={12} sm={5}>
                    <GenericField
                      disabled={!editing}
                      name={`allongeNumber-${index}`}
                      label="pim_details.documents.allonge_number"
                      size="medium"
                    />
                  </Grid>
                  <Box mt={1} />
                  <GenericField
                    disabled={!editing}
                    name={`allongeDescription-${index}`}
                    label="pim_details.documents.allonge_description"
                    placeholder="pim_details.documents.allonge_description.placeholder"
                    size="medium"
                  />
                </Box>
              )}
            </React.Fragment>
          ))}
        </AutosaveForm>
      )}
    </FormSection>
  );
}
