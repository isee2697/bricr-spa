import React, { useState } from 'react';

import { useLocale } from 'hooks';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { GenericField } from 'form/fields';
import { Box, Grid } from 'ui/atoms';
import { ExtraArticleType } from '../DocumentContractFlow.types';
import { SubSectionHeader } from 'ui/molecules';

export function ContractExtraArticlesForm() {
  const { formatMessage } = useLocale();
  const [articles, setArticles] = useState<ExtraArticleType[]>([]);
  const [toggled, setToggled] = useState(0);

  return (
    <FormSection
      title={formatMessage({
        id: 'pim_details.documents.extra_articles',
      })}
      isExpandable
      isInitExpanded
      onAdd={() => {
        setArticles([...articles, { number: '', description: '' }]);
      }}
    >
      {editing => (
        <AutosaveForm onSave={() => Promise.resolve(undefined)}>
          {articles.map((articleItem, index) => (
            <React.Fragment key={index}>
              <SubSectionHeader
                toggled={toggled === index}
                onToggleClick={() => {
                  setToggled(index);
                }}
                onOptionsClick={() => {}}
              >
                {formatMessage({ id: 'pim_details.documents.article' })} {articleItem.number}
              </SubSectionHeader>

              {toggled === index && (
                <Box mt={1}>
                  <Grid item xs={12} sm={5}>
                    <GenericField
                      disabled={!editing}
                      name={`articleNumber-${index}`}
                      label="pim_details.documents.article_number"
                      size="medium"
                    />
                  </Grid>
                  <Box mt={1} />
                  <GenericField
                    disabled={!editing}
                    name={`articleDescription-${index}`}
                    label="pim_details.documents.article_description"
                    placeholder="pim_details.documents.article_description.placeholder"
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
