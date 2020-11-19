import React from 'react';

import { Card, CardContent, Typography } from 'ui/atoms';
import { InfoSection } from 'ui/molecules';
import { useLocale } from 'hooks';

import { ArticleGroup } from './articleGroup/ArticleGroup';

export const ArticleGroups = () => {
  const { formatMessage } = useLocale();

  const articleGroups = [''];

  return (
    <>
      {articleGroups.length === 0 && (
        <Card>
          <CardContent>
            <InfoSection emoji="🤔">
              <Typography variant="h3">
                {formatMessage({ id: 'settings.documents.contract_templates_details.article_groups.empty_title' })}
              </Typography>
              <Typography variant="h3">
                {formatMessage({
                  id: 'settings.documents.contract_templates_details.article_groups.empty_description',
                })}
              </Typography>
            </InfoSection>
          </CardContent>
        </Card>
      )}
      {articleGroups.map((articleGroup, index) => (
        <ArticleGroup index={index} />
      ))}
    </>
  );
};
