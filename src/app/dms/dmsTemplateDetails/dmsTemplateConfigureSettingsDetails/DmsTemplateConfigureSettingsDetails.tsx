import React from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Page } from 'ui/templates';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { GenericField } from 'form/fields';
import { Box } from 'ui/atoms';

import { DmsTemplateConfigureSettingsDetailsProps } from './DmsTemplateConfigureSettingsDetails.types';

export const DmsTemplateConfigureSettingsDetails = ({ template }: DmsTemplateConfigureSettingsDetailsProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <Page showHeader title={template.name} titleActions={[]}>
        <Box display="flex" flexDirection="column" width="100%">
          <Box mt={1}>
            <FormSection
              title={formatMessage({ id: 'dms.template.configure_settings' })}
              onOptionsClick={() => {}}
              isExpandable
              isInitExpanded
            >
              {editing => (
                <AutosaveForm onSave={() => Promise.resolve(undefined)}>
                  <GenericField
                    name="templateName"
                    label="dms.template.measurements"
                    placeholder="dms.template.measurements.placeholder"
                    size="medium"
                    disabled={!editing}
                  />
                </AutosaveForm>
              )}
            </FormSection>
          </Box>
        </Box>
      </Page>
    </>
  );
};
