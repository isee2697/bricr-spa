import React, { useState } from 'react';
import clsx from 'classnames';

import { Page } from 'ui/templates';
import { useLocale } from 'hooks';
import { Card, CardContent, Grid, Box, Typography, CardHeader, IconButton } from 'ui/atoms';
import { AddIcon, ManageIcon } from 'ui/atoms/icons';
import { List, PropertyItemPlaceholder } from 'ui/molecules';
import { UploadModal } from 'ui/organisms';

import { ActiveTabStatus, DmsImagesProps } from './DmsImages.types';
import { useStyles } from './DmsImages.styles';
import { DmsImageLibraryTabs } from './DmsImageLibraryTabs/DmsImageLibraryTabs';
import { DmsImageItem } from './DmsImageItem/DmsImageItem';

export const DmsImages = ({ images, onAdd, onUpdate }: DmsImagesProps) => {
  const { formatMessage } = useLocale();
  const [isModalVisible, setModalVisible] = useState(false);
  const classes = useStyles();
  const [status, setStatus] = useState<ActiveTabStatus>('active');

  const activeImages = images.filter(item => item.status === 'active');
  const inactiveImages = images.filter(item => item.status === 'inactive');

  return (
    <Box flex={1}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Page
            showHeader
            headerProps={{
              actionText: formatMessage({
                id: 'dms.images.add_image',
              }),
              actionIcon: <AddIcon color="inherit" />,
              onAction: () => setModalVisible(true),
            }}
            title={formatMessage({
              id: `dms.images.title`,
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
                      <DmsImageLibraryTabs
                        status={status}
                        onStatusChange={setStatus}
                        amounts={{
                          active: activeImages?.length,
                          inactive: inactiveImages?.length,
                        }}
                      />
                    </Box>
                    <List
                      className={classes.container}
                      items={status === 'active' ? activeImages : inactiveImages}
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
                        id: 'dms.images.empty_line_1',
                      })}
                      emptyDescription={formatMessage({
                        id: 'dms.images.empty_line_2',
                      })}
                      renderItem={(image, checked, checkbox) => (
                        <Box key={image.id} display="inline-block" width="50%">
                          <Box className={clsx(classes.row, { [classes.rowChecked]: checked }, 'dms-image-row')}>
                            {checkbox}
                            <Box component="span" className={classes.rowItem}>
                              <Box>
                                <DmsImageItem image={image} onEdit={onUpdate} onDelete={() => {}} />
                              </Box>
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
        <UploadModal
          isOpened={true}
          onClose={() => setModalVisible(false)}
          onUpload={files => {
            // TODO: onAdd here
            setModalVisible(false);
          }}
        />
      )}
    </Box>
  );
};
