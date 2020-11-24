import React from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Page } from 'ui/templates';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { GenericField, RadioGroupField } from 'form/fields';
import { Box } from 'ui/atoms';
import { FormSubSectionHeader } from 'ui/molecules';
import { TemplateRights, TemplateTypes } from 'app/dms/dictionaires';

import { DmsTemplateGeneralDetailsProps } from './DmsTemplateGeneralDetails.types';

export const DmsTemplateGeneralDetails = ({ template }: DmsTemplateGeneralDetailsProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <Page showHeader title={template.name} titleActions={[]}>
        <Box display="flex" flexDirection="column" width="100%">
          <Box mt={1}>
            <FormSection
              title={formatMessage({ id: 'dms.template.template_name' })}
              onOptionsClick={() => {}}
              isExpandable
              isInitExpanded
            >
              {editing => (
                <AutosaveForm onSave={() => Promise.resolve(undefined)}>
                  <GenericField
                    name="templateName"
                    label="dms.template.street"
                    placeholder="dms.template.street.placeholder"
                    size="medium"
                    disabled={!editing}
                  />
                </AutosaveForm>
              )}
            </FormSection>
          </Box>
          <Box mt={3}>
            <FormSection
              title={formatMessage({ id: 'dms.template.template_details' })}
              onOptionsClick={() => {}}
              isExpandable
              isInitExpanded
            >
              {editing => (
                <AutosaveForm onSave={() => Promise.resolve(undefined)}>
                  <FormSubSectionHeader
                    title={formatMessage({ id: 'dms.template.pick_type_of_property' })}
                    subtitle={formatMessage({ id: 'common.choose_one_or_more_option_below' })}
                  />
                  <Box mt={2} />
                  <RadioGroupField disabled={!editing} name="templateProperties.type" options={TemplateTypes} />
                </AutosaveForm>
              )}
            </FormSection>
          </Box>
          <Box mt={3}>
            <FormSection
              title={formatMessage({ id: 'dms.template.template_security' })}
              onOptionsClick={() => {}}
              isExpandable
              isInitExpanded
            >
              {editing => (
                <AutosaveForm onSave={() => Promise.resolve(undefined)}>
                  <FormSubSectionHeader
                    title={formatMessage({ id: 'dms.template.rights' })}
                    subtitle={formatMessage({ id: 'common.choose_one_or_more_option_below' })}
                  />
                  <Box mt={2} />
                  <RadioGroupField disabled={!editing} name="templateSecurity" options={TemplateRights} />
                </AutosaveForm>
              )}
            </FormSection>
          </Box>
        </Box>
      </Page>
    </>
  );
};
