import React from 'react';

import { Page } from 'ui/templates';
import { FormSection } from 'ui/organisms';
import { Box } from 'ui/atoms';
import { usePDFDocument } from 'hooks/usePDFDocument/usePDFDocument';

import { DmsTemplateLayoutDetailsProps } from './DmsTemplateLayoutDetails.types';
import { useStyles } from './DmsTemplateLayoutDetails.styles';

export const DmsTemplateLayoutDetails = ({ template }: DmsTemplateLayoutDetailsProps) => {
  const classes = useStyles();
  const { pages } = usePDFDocument({
    url: template.file || '',
  });

  return (
    <>
      <Page showHeader withoutHeader title={template.name} titleActions={[]}>
        <Box mt={1} width="100%">
          <FormSection title={template.name} onEditClick={() => {}} onOptionsClick={() => {}}>
            {editing => (
              <Box className={classes.pdfViewer} display="flex" flexDirection="column" alignItems="center">
                {pages.map((canvasURL, index) => (
                  <Box my={2}>
                    <img src={canvasURL} key={index} alt={'Page ' + index} />
                  </Box>
                ))}
              </Box>
            )}
          </FormSection>
        </Box>
      </Page>
    </>
  );
};
