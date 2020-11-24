import React from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Page } from 'ui/templates';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { GenericField, RadioGroupField } from 'form/fields';
import { Box } from 'ui/atoms';
import { FormSubSectionHeader } from 'ui/molecules';
import { ContentBlockRights } from 'app/dms/dictionaires';

import { DmsContentBlockGeneralDetailsProps } from './DmsContentBlockGeneralDetails.types';

export const DmsContentBlockGeneralDetails = ({ block }: DmsContentBlockGeneralDetailsProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <Page showHeader title={block.name} titleActions={[]}>
        <Box display="flex" flexDirection="column" width="100%">
          <Box mt={1}>
            <FormSection
              title={formatMessage({ id: 'dms.content_blocks.content_block_name' })}
              onOptionsClick={() => {}}
              isExpandable
              isInitExpanded
            >
              {editing => (
                <AutosaveForm onSave={() => Promise.resolve(undefined)}>
                  <GenericField
                    name="contentBlockName"
                    label="dms.content_blocks.content_block_name"
                    placeholder="dms.content_blocks.content_block_name.placeholder"
                    size="medium"
                    disabled={!editing}
                  />
                </AutosaveForm>
              )}
            </FormSection>
          </Box>
          <Box mt={3}>
            <FormSection
              title={formatMessage({ id: 'dms.content_blocks.content_block_security' })}
              onOptionsClick={() => {}}
              isExpandable
              isInitExpanded
            >
              {editing => (
                <AutosaveForm onSave={() => Promise.resolve(undefined)}>
                  <FormSubSectionHeader
                    title={formatMessage({ id: 'dms.content_blocks.rights' })}
                    subtitle={formatMessage({ id: 'common.choose_one_or_more_option_below' })}
                  />
                  <Box mt={2} />
                  <RadioGroupField disabled={!editing} name="contentBlockSecurity" options={ContentBlockRights} />
                </AutosaveForm>
              )}
            </FormSection>
          </Box>
        </Box>
      </Page>
    </>
  );
};
