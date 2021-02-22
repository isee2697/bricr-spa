import React, { useState } from 'react';
import clsx from 'classnames';
import { useHistory, useLocation, useParams } from 'react-router-dom';

import { Page } from 'ui/templates';
import { useLocale } from 'hooks';
import { Card, CardContent, Grid, Box, Typography, CardHeader, IconButton } from 'ui/atoms';
import { AddIcon, ManageIcon } from 'ui/atoms/icons';
import { List, PropertyItemPlaceholder } from 'ui/molecules';
import { joinUrlParams } from 'routing/AppRoute.utils';

import { ActiveTabStatus, DmsContentBlocksProps } from './DmsContentBlocks.types';
import { useStyles } from './DmsContentBlocks.styles';
import { DmsContentBlocksTabs } from './dmsContentBlocksTabs/DmsContentBlocksTabs';
import { DmsContentBlockItem } from './dmsContentBlockItem/DmsContentBlockItem';
import { DmsAddBlockDialog } from './dmsAddBlockDialog/DmsAddBlockDialog';

export const DmsContentBlocks = ({ contentBlocks, onAdd, onUpdate }: DmsContentBlocksProps) => {
  const { formatMessage } = useLocale();
  const [isModalVisible, setModalVisible] = useState(false);
  const classes = useStyles();
  const { push } = useHistory();
  const [status, setStatus] = useState<ActiveTabStatus>('active');
  const params = useParams<{ type: string; category: string }>();
  const { pathname } = useLocation();

  const activeBlocks = contentBlocks.filter(item => item.status === 'active');
  const inactiveBlocks = contentBlocks.filter(item => item.status === 'inactive');

  return (
    <Box flex={1}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Page
            showHeader
            headerProps={{
              actionText: formatMessage({
                id: 'dms.content_blocks.create_block',
              }),
              actionIcon: <AddIcon color="inherit" />,
              onAction: () => setModalVisible(true),
            }}
            title={formatMessage({
              id: `dms.content_blocks.title`,
            })}
            titleActions={[]}
          >
            <Grid item xs={12}>
              <Box mt={1}>
                <Card>
                  <CardHeader
                    title={<Typography variant="h2"></Typography>}
                    action={
                      <IconButton variant="rounded" size="small" onClick={() => {}} aria-label="adjust">
                        <ManageIcon />
                      </IconButton>
                    }
                  />
                  <CardContent>
                    <Box mb={2}>
                      <DmsContentBlocksTabs
                        status={status}
                        onStatusChange={setStatus}
                        amounts={{
                          active: activeBlocks?.length,
                          inactive: inactiveBlocks?.length,
                        }}
                      />
                    </Box>
                    <List
                      className="dms-content-blocks-list"
                      items={status === 'active' ? activeBlocks : inactiveBlocks}
                      itemIndex="id"
                      sortOptions={[
                        { key: 'lastEdited', name: 'Last edited' },
                        { key: 'firstEdited', name: 'First edited' },
                      ]}
                      onSort={key => alert(key)}
                      pagination={{
                        count: 8,
                        currentPerPage: 10,
                        perPageOptions: [10, 25, 'All'],
                        onPerPageChange: value => {
                          alert(value);
                        },
                      }}
                      loadingItem={<PropertyItemPlaceholder />}
                      emptyTitle={formatMessage({
                        id: 'dms.content_blocks.empty_line_1',
                      })}
                      emptyDescription={formatMessage({
                        id: 'dms.content_blocks.empty_line_2',
                      })}
                      renderItem={(block, checked, checkbox) => (
                        <Box
                          key={block.id}
                          className={clsx(classes.row, { [classes.rowChecked]: checked }, 'dms-content-blocks-row')}
                        >
                          {checkbox}
                          <Box component="span" className={classes.rowItem}>
                            <Box
                              className={classes.itemButton}
                              onClick={() => {
                                if (block.status === 'active') {
                                  push(`${joinUrlParams(pathname, params)}/${block.id}`, {
                                    name: block.name,
                                  });
                                }
                              }}
                            >
                              <DmsContentBlockItem
                                contentBlock={block}
                                onStatusChange={status => {
                                  onUpdate({ ...block, status });
                                }}
                              />
                            </Box>
                          </Box>
                        </Box>
                      )}
                    />
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          </Page>
        </Grid>
      </Grid>
      {isModalVisible && (
        <DmsAddBlockDialog isOpened={isModalVisible} onClose={() => setModalVisible(false)} onSubmit={onAdd} />
      )}
    </Box>
  );
};
