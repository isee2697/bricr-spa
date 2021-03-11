import React from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Page } from 'ui/templates';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { DropdownField, GenericField, RadioGroupField } from 'form/fields';
import { Box, Grid } from 'ui/atoms';
import { FormSubSectionHeader, TileButton } from 'ui/molecules';
import { DropdownItem } from 'ui/atoms/dropdown/Dropdown.types';
import { DocIcon } from 'ui/atoms/icons';

import { GeneralPageSettingsProps, Languages } from './GeneralPageSettings.types';

export const GeneralPageSettings = ({ title, types, onSave, updatedBy, dateUpdated }: GeneralPageSettingsProps) => {
  const { formatMessage } = useLocale();

  const languageDropdownItems: DropdownItem[] = Object.values(Languages).map(key => ({
    label: formatMessage({ id: `dictionaries.language.${key}` }),
    value: key,
  }));

  return (
    <>
      <Page showHeader title={title} titleActions={[]} updatedBy={updatedBy} dateUpdated={dateUpdated}>
        <FormSection title={formatMessage({ id: 'dms.general_page_settings.title' })} isExpandable isInitExpanded>
          {editing => (
            <AutosaveForm onSave={onSave}>
              <GenericField
                name="fileName"
                label="dms.general_page_settings.file_name"
                placeholder="dms.general_page_settings.file_name.placeholder"
                size="medium"
                disabled={!editing}
              />
              <GenericField
                name="description"
                label="dms.general_page_settings.description"
                placeholder="dms.general_page_settings.description.placeholder"
                size="medium"
                disabled={!editing}
              />
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <GenericField
                    name="version"
                    label="dms.general_page_settings.version"
                    placeholder="dms.general_page_settings.version.placeholder"
                    size="medium"
                    disabled={!editing}
                  />
                </Grid>
                <Grid item xs={6}>
                  <DropdownField
                    disabled={!editing}
                    name="language"
                    label={formatMessage({ id: 'dms.general_page_settings.language' })}
                    items={languageDropdownItems}
                    placeholder={formatMessage({ id: 'dms.general_page_settings.language.placeholder' })}
                  />
                </Grid>
              </Grid>
              <Box mt={2} />
              <FormSubSectionHeader
                title={formatMessage({ id: 'dms.general_page_settings.type_of_document' })}
                subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
              />
              <Box mt={2} />
              <RadioGroupField
                disabled={!editing}
                name="type"
                options={types.map(type => ({
                  value: type,
                  label: formatMessage({ id: `dictionaries.dms_type.${type}` }),
                  icon: <DocIcon />,
                }))}
                actionElement={<TileButton isDisabled={!editing} onClick={() => {}} />}
              />
            </AutosaveForm>
          )}
        </FormSection>
      </Page>
    </>
  );
};
