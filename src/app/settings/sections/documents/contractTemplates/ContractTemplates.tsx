import React, { useState } from 'react';

import { useLocale, useModalDispatch, useModalState } from 'hooks';
import { Box, Button, Card, CardContent, IconButton, Typography } from 'ui/atoms';
import { AddIcon, ManageIcon } from 'ui/atoms/icons';
import { InfoSection, List } from 'ui/molecules';
import { SortOption } from 'ui/molecules/list/List.types';

import { ContractTemplatesProps } from './ContractTemplates.types';
import { useStyles } from './ContractTemplates.styles';
import { AddContractTemplateModal } from './addContractTemplateModal/AddContractTemplateModal';
import { ContractTemplatesTabs } from './contractTemplatesTabs/Tabs';
import { ContractTemplatesRow } from './contractTemplatesRow/ContractTemplatesRow';

export const ContractTemplates = ({ contractTemplates, onAddContractTemplate }: ContractTemplatesProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { open, close } = useModalDispatch();
  const { isOpen: isModalOpen } = useModalState('add-contract-template');
  const [status, setStatus] = useState<'active' | 'inactive'>('inactive');

  const sortOptions: SortOption[] = [
    {
      name: formatMessage({ id: 'common.sort_options.last_edited' }),
      key: 'last_edited',
    },
  ];

  return (
    <>
      <Box mb={2} display="flex" alignItems="center" justifyContent="space-between">
        <Box>
          <Typography variant="h3" className={classes.fontWeightBold}>
            {formatMessage({ id: 'settings.documents.contract_templates.title' })}
          </Typography>
          <Box mt={3}>
            <Typography variant="h3">
              {formatMessage({ id: 'settings.documents.contract_templates.sub_title' })}
            </Typography>
          </Box>
        </Box>
        <Button
          color="primary"
          variant="contained"
          startIcon={<AddIcon color="inherit" />}
          onClick={() => open('add-contract-template')}
        >
          {formatMessage({ id: 'settings.documents.contract_templates.add_contract_template' })}
        </Button>
      </Box>
      <Card>
        <CardContent>
          {contractTemplates.length === 0 && (
            <InfoSection emoji="🤔">
              <Typography variant="h3">
                {formatMessage({ id: 'settings.documents.contract_templates.empty.title' })}
              </Typography>
              <Typography variant="h3">
                {formatMessage({ id: 'settings.documents.contract_templates.empty.description' })}
              </Typography>
            </InfoSection>
          )}
          {contractTemplates.length > 0 && (
            <Box>
              <Box display="flex" justifyContent="flex-end">
                <IconButton size="small" variant="roundedContained">
                  <ManageIcon />
                </IconButton>
              </Box>
              <ContractTemplatesTabs status={status} onStatusChange={setStatus} amounts={{ active: 2, inactive: 0 }} />
              <List
                items={contractTemplates}
                itemIndex={'id'}
                renderItem={(contractTemplate, checked, checkbox) => (
                  <ContractTemplatesRow checkbox={checkbox} checked={checked} item={contractTemplate} />
                )}
                sortOptions={sortOptions}
              />
            </Box>
          )}
        </CardContent>
      </Card>
      <AddContractTemplateModal
        isOpened={isModalOpen}
        onClose={() => close('add-contract-template')}
        onSubmit={onAddContractTemplate}
      />
    </>
  );
};
