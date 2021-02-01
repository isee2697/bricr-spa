import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Loader, Grid, Box, IconButton } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { ExitIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { useStyles } from '../DocumentDetails.styles';
import { ListOptionsMenu } from 'ui/molecules';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';

import { ContractStepStatus, DocumentContractProps } from './DocumentContract.types';
import { DocumentContractSidebarMenu } from './documentContractSidebar/DocumentContractSidebarMenu';
import { DocumentContractFlow } from './documentContractFlow/DocumentContractFlow';
import { DocumentContractGroup } from './documentContractSidebar/DocumentContractSidebarMenu.types';
import { DocumentSecurity } from './documentSecurity/DocumentSecurity';

export const DocumentContract = ({ pimId, loading, error, data, breadcrumbs }: DocumentContractProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isSidebarVisible, setSidebarVisibility] = useState(true);
  const { push } = useHistory();
  const [openedGroup, setOpenedGroup] = useState<DocumentContractGroup>(DocumentContractGroup.Data);
  const [activeItem, setActiveItem] = useState(
    data?.steps.findIndex(step => step.status === ContractStepStatus.InProgress) || -1,
  );

  const handleChangeActiveItem = (itemIndex: number) => {
    const element = document.getElementById(`document-contract-step-${itemIndex + 1}`);
    element?.scrollIntoView();
    setActiveItem(itemIndex);
  };

  const handleSidebarHide = useCallback(() => {
    setSidebarVisibility(false);
  }, []);

  const handleSidebarOpen = useCallback(() => {
    setSidebarVisibility(true);
  }, []);

  const handleGoBack = useCallback(() => {
    if (pimId) {
      push(AppRoute.pimDetails.replace(':id', pimId) + '/documents');
    }
  }, [push, pimId]);

  if (loading) {
    return <Loader />;
  }

  if (!pimId || !data) {
    return null;
  }

  return (
    <>
      {breadcrumbs}
      <Grid container spacing={0}>
        <DocumentContractSidebarMenu
          isVisible={isSidebarVisible}
          onHide={handleSidebarHide}
          data={data}
          onChangeGroup={setOpenedGroup}
          group={openedGroup}
          activeItem={activeItem}
          onChangeActiveItem={handleChangeActiveItem}
        />
        <Box flex={1}>
          <Grid container className={classes.content}>
            <PimDetailsHeader
              title={data?.name}
              isSidebarVisible={isSidebarVisible}
              onSidebarOpen={handleSidebarOpen}
              action={
                <Box display="flex">
                  <IconButton onClick={handleGoBack} variant="rounded" size="small">
                    <ExitIcon />
                  </IconButton>
                  <Box ml={3.5}>
                    <ListOptionsMenu id={data.id} onDeleteClick={() => {}} hideEditButton>
                      <ListOptionsMenuItem
                        title={formatMessage({
                          id: 'pim_details.documents.menu.generate_pdf',
                        })}
                      />
                      <ListOptionsMenuItem
                        title={formatMessage({
                          id: 'pim_details.documents.menu.send',
                        })}
                      />
                      <ListOptionsMenuItem
                        title={formatMessage({
                          id: 'pim_details.documents.menu.save_as_draft',
                        })}
                      />
                      <ListOptionsMenuItem
                        title={formatMessage({
                          id: 'pim_details.documents.menu.copy',
                        })}
                      />
                      <ListOptionsMenuItem
                        title={formatMessage({
                          id: 'pim_details.documents.menu.archive',
                        })}
                      />
                    </ListOptionsMenu>
                  </Box>
                </Box>
              }
            />
            {openedGroup === DocumentContractGroup.Data && <DocumentContractFlow data={data} />}
            {openedGroup === DocumentContractGroup.Security && <DocumentSecurity />}
          </Grid>
        </Box>
      </Grid>
    </>
  );
};
