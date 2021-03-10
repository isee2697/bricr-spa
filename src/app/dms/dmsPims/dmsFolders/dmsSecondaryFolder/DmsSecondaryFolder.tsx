import React, { useState, ReactNode } from 'react';
import { ArrowBack } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

import { Box, Grid, Card, CardHeader, CardContent } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { PropertyItemPlaceholder, Search } from 'ui/molecules';
import { DmsFolderIcon } from '../dmsFolderIcon/DmsFolderIcon';
import { DmsFolderType } from 'app/dms/Dms.types';
import { DmsListViewContainer } from '../dmsListView/DmsListViewContainer';
import { FolderIcon } from 'ui/atoms/icons';
import { DmsAddFolderDialog } from 'app/dms/dmsPims/dmsFolders/dmsAddFolderDialog/DmsAddFolderDialog';

import { useStyles } from './DmsSecondaryFolder.styles';
import { DmsSecondaryFolderProps } from './DmsSecondaryFolder.types';

const secondaryFolderOptions = [
  { title: 'Adriaan van Bergenstraat', type: '', value: 'Adriaan van Bergenstraat', icon: 'CH' },
  { title: 'Adriaan van Hils', type: '', value: 'Adriaan van Hils', icon: 'CH' },
  { title: 'Adriaan van Bils', type: '', value: 'Adriaan van Bils', icon: 'CH' },
  { title: 'adriaanse', type: '', value: 'adriaanse', icon: 'CH' },
];

export const DmsSecondaryFolder = ({ name, foldersData, isLoading, onAddFolder }: DmsSecondaryFolderProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const history = useHistory();

  const [dialog, setDialog] = useState<ReactNode | null>(null);
  const [selectedFolder, setSelectedFolder] = useState<DmsFolderType | null>(null);

  const handleAdd = () => {
    setDialog(
      <DmsAddFolderDialog
        isOpened={true}
        isAdd={true}
        onClose={() => {
          setDialog(null);
        }}
        onSubmit={({ folderName }) => {
          if (onAddFolder) {
            onAddFolder(folderName);
          }
          setDialog(null);

          return new Promise(resolve => {});
        }}
      />,
    );
  };

  return (
    <Grid item xs={12}>
      <Card className={classes.root}>
        <CardHeader
          className="dms-secondary-folder-header"
          title={name}
          avatar={
            <Box
              className={classes.backBtnWrapper}
              onClick={() =>
                history.push(
                  history.location.pathname
                    .split('/')
                    .slice(0, -1)
                    .join('/'),
                )
              }
            >
              <FolderIcon id={'back_primary'} variant="purple" weight={2} className={classes.backBtn} />
              <Box className={classes.backBtnIcon}>
                <ArrowBack />
              </Box>
            </Box>
          }
        />
        <CardContent>
          <Box mt={3} display="flex" flexDirection="column" alignItems="center" className={classes.searchBoxWrapper}>
            <Search
              options={secondaryFolderOptions}
              endAdornment={<></>}
              classes={{
                root: classes.searchBox,
                input: classes.searchBox,
              }}
            />
          </Box>
          <Box mt={4}>
            <Grid container>
              {isLoading ? (
                <Grid item xs={12}>
                  <PropertyItemPlaceholder />
                </Grid>
              ) : foldersData?.length ? (
                foldersData.map((item, index) => (
                  <Grid item key={index} className={classes.listItem} xs={6} sm={4} lg={2}>
                    <DmsFolderIcon
                      id={item.id}
                      name={item.name}
                      childCount={item.documents?.length || 0}
                      type="secondary"
                      onClick={() => {
                        setSelectedFolder(item.id === selectedFolder?.id ? null : item);
                      }}
                      isOpened={item.id === selectedFolder?.id}
                    />
                  </Grid>
                ))
              ) : null}
              <Grid item className={classes.listItem} xs={6} sm={4} lg={2}>
                <DmsFolderIcon
                  id="add_folder"
                  name={formatMessage({ id: 'dms.documents.add_folder' })}
                  onClick={() => {
                    handleAdd();
                  }}
                  isAdd
                />
              </Grid>
            </Grid>
          </Box>
          {selectedFolder && (
            <Box mt={6}>
              <DmsListViewContainer id={selectedFolder.id} name={selectedFolder.name} data={selectedFolder.documents} />
            </Box>
          )}
        </CardContent>
      </Card>

      {/* show add folder dialog */}
      {dialog}
    </Grid>
  );
};
