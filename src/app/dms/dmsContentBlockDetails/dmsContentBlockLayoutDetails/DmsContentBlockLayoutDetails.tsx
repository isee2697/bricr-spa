import React from 'react';

import { Page } from 'ui/templates';
import { FormSection } from 'ui/organisms';
import { Box } from 'ui/atoms';
import { usePDFDocument } from 'hooks/usePDFDocument/usePDFDocument';

import { DmsContentBlockLayoutDetailsProps } from './DmsContentBlockLayoutDetails.types';
import { useStyles } from './DmsContentBlockLayoutDetails.styles';

export const DmsContentBlockLayoutDetails = ({ block }: DmsContentBlockLayoutDetailsProps) => {
  const classes = useStyles();
  const { pages } = usePDFDocument({
    url: block.file || '',
  });

  return (
    <>
      <Page showHeader withoutHeader title={block.name} titleActions={[]}>
        <Box mt={1} width="100%">
          <FormSection title={block.name} onEditClick={() => {}} onOptionsClick={() => {}}>
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
