import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { SidebarMenu } from 'ui/molecules';
import { SaleIcon, SeeIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { Box, IconButton } from 'ui/atoms';
import { usePDFDocument } from 'hooks/usePDFDocument/usePDFDocument';

import { DocumentUploadedSidebarMenuProps } from './DocumentUploadedSidebarMenu.types';
import { useStyles } from './DocumentUploadedSidebarMenu.styles';

export const DocumentUploadedSidebarMenu = ({ title, onHide, isVisible, data }: DocumentUploadedSidebarMenuProps) => {
  const { formatMessage } = useLocale();
  const { url } = useRouteMatch();
  const classes = useStyles();
  const { pages } = usePDFDocument({
    url: data.file || '',
  });

  const subtitle = formatMessage({ id: 'common.sidebar_property.property' });

  const menu = {
    url,
    groups: [],
  };

  const handleOpenPdf = () => {
    window.open(data.file, '_blank');
  };

  return (
    <SidebarMenu
      onHide={onHide}
      isVisible={isVisible}
      translationPrefix="pim_details.documents.menu"
      menu={menu}
      menuTitleIcon={<SaleIcon />}
      menuTitle={title}
      menuSubTitle={subtitle}
    >
      <Box mt={3.5} mx={2} display="flex" flexDirection="column" alignItems="flex-end">
        <Box className={classes.pdfViewer} width="100%">
          <img src={pages[0]} alt={'Page 1'} className={classes.pdfContent} onClick={handleOpenPdf} />
        </Box>
        <Box mt={1}>
          <IconButton variant="rounded" size="small" onClick={handleOpenPdf}>
            <SeeIcon color="inherit" />
          </IconButton>
        </Box>
      </Box>
    </SidebarMenu>
  );
};
