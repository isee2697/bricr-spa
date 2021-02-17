import React, { useState } from 'react';
import { useRouteMatch, Link as RouterLink, useLocation } from 'react-router-dom';
import { KeyboardBackspace } from '@material-ui/icons';

import { useLocale } from 'hooks/useLocale/useLocale';
import { ActionTabs, AdvancedSearch, SidebarMenu } from 'ui/molecules';
import { Link, Typography, Box, Card, CardContent, Collapse, Grid, UserAvatar, Button, Avatar } from 'ui/atoms';
import { SidebarMenuType } from 'ui/molecules/sidebarMenu/SidebarMenu.types';
import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';
import { AddIcon, ArrowDownIcon, ArrowUpIcon, AttachIcon, DashboardIcon } from 'ui/atoms/icons';

import {
  DmsDetailsSidebarMenuProps,
  EditorBlocksFormatting,
  EditorBlocksGeneral,
  EditorBlocksMedia,
  EditorFields,
  EditorTokensCrm,
} from './dmsDetailsSidebarMenu.types';
import { useStyles } from './dmsDetailsSidebarMenu.styles';

export const DmsDetailsSidebarMenu = ({
  onHide,
  isVisible,
  showImages = false,
  showAttachments = false,
}: DmsDetailsSidebarMenuProps) => {
  const { formatMessage } = useLocale();
  const { url } = useRouteMatch();
  const urlPath = url.split('/');
  urlPath.pop();
  const parentUrl = urlPath.join('/');
  const [editorTab, setEditorTab] = useState<'blocks' | 'fields' | 'tokens'>('blocks');
  const classes = useStyles();
  const [isGroupOpen, setGroupOpen] = useState<Record<string, boolean>>({});

  const { pathname } = useLocation();

  const menu: SidebarMenuType = {
    url,
    groups: [
      {
        items: [
          { key: 'general', hideIcon: true, title: `1. ${formatMessage({ id: 'dms.templates.general' })}` },
          {
            key: 'configureSettings',
            hideIcon: true,
            title: `2. ${formatMessage({ id: 'dms.templates.configure_settings' })}`,
          },
          {
            key: 'editor',
            hideIcon: true,
            title: `3. ${formatMessage({ id: 'dms.templates.editor' })}`,
          },
        ],
      },
    ],
  };

  const actionTabs: ActionTab[] = [
    {
      label: formatMessage({ id: 'dms.menu.editor_tab.blocks' }),
      value: 'blocks',
      className: classes.tab,
    },
    {
      label: formatMessage({ id: 'dms.menu.editor_tab.fields' }),
      value: 'fields',
      className: classes.tab,
    },
    {
      label: formatMessage({ id: 'dms.menu.editor_tab.tokens' }),
      value: 'tokens',
      className: classes.tab,
    },
  ];

  const isOnEditorPage = pathname.endsWith('editor');

  const isGroupCollapseOpen = (group: string) => {
    if (isGroupOpen[group] === undefined) {
      setGroupOpen(groups => ({
        ...groups,
        [group]: true,
      }));

      return true;
    }

    return isGroupOpen[group];
  };

  const attachments = [
    {
      fileName: 'Bijlagel1.pdf',
    },
    {
      fileName: 'Bijlagel2.pdf',
    },
    {
      fileName: 'Bijlagel3.pdf',
    },
  ];

  return (
    <SidebarMenu
      onHide={onHide}
      isVisible={isVisible}
      translationPrefix="dms.templates.menu"
      menu={menu}
      menuTitle={
        <Link component={RouterLink} to={parentUrl}>
          <Box display="flex" alignItems="center" justifyContent="center" my={2} width="100%">
            <KeyboardBackspace />
            <Box ml={2}>
              <Typography variant="h4">{formatMessage({ id: `dms.menu.back_to_list` })}</Typography>
            </Box>
          </Box>
        </Link>
      }
    >
      {(showImages || showAttachments || isOnEditorPage) && (
        <>
          <Box className={classes.spacing} />
          {!showImages && !showAttachments && isOnEditorPage && (
            <Card className={classes.noBorderRadius}>
              <CardContent>
                <ActionTabs
                  variant="fullWidth"
                  tabs={actionTabs}
                  status={editorTab}
                  onStatusChange={setEditorTab}
                  className={classes.tabs}
                />
                {editorTab === 'blocks' && (
                  <>
                    <Box
                      onClick={() => {
                        setGroupOpen(groups => ({
                          ...groups,
                          general: !groups.general,
                        }));
                      }}
                      className={classes.collapseHeader}
                      mt={6}
                    >
                      <Typography variant="h4" color="textSecondary">
                        {formatMessage({ id: 'dms.menu.template_blocks.general' })}
                      </Typography>
                      {isGroupCollapseOpen('general') ? <ArrowUpIcon /> : <ArrowDownIcon />}
                    </Box>
                    <Collapse in={isGroupCollapseOpen('general')} className={classes.collapseContent}>
                      {Object.keys(EditorBlocksGeneral).map(key => (
                        <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
                          <Box
                            className={classes.icon}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            mb={1}
                          >
                            <DashboardIcon />
                          </Box>
                          <Typography variant="h5">
                            {formatMessage({ id: `dictionaries.template_blocks.${key}` })}
                          </Typography>
                        </Box>
                      ))}
                    </Collapse>
                    <Box
                      onClick={() => {
                        setGroupOpen(groups => ({
                          ...groups,
                          media: !groups.media,
                        }));
                      }}
                      className={classes.collapseHeader}
                      mt={4}
                    >
                      <Typography variant="h4" color="textSecondary">
                        {formatMessage({ id: 'dms.menu.template_blocks.media' })}
                      </Typography>
                      {isGroupCollapseOpen('media') ? <ArrowUpIcon /> : <ArrowDownIcon />}
                    </Box>
                    <Collapse in={isGroupCollapseOpen('media')} className={classes.collapseContent}>
                      {Object.keys(EditorBlocksMedia).map(key => (
                        <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
                          <Box
                            className={classes.icon}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            mb={1}
                          >
                            <DashboardIcon />
                          </Box>
                          <Typography variant="h5">
                            {formatMessage({ id: `dictionaries.template_blocks.${key}` })}
                          </Typography>
                        </Box>
                      ))}
                    </Collapse>
                    <Box
                      onClick={() => {
                        setGroupOpen(groups => ({
                          ...groups,
                          formatting: !groups.formatting,
                        }));
                      }}
                      className={classes.collapseHeader}
                      mt={6}
                    >
                      <Typography variant="h4" color="textSecondary">
                        {formatMessage({ id: 'dms.menu.template_blocks.formatting' })}
                      </Typography>
                      {isGroupCollapseOpen('formatting') ? <ArrowUpIcon /> : <ArrowDownIcon />}
                    </Box>
                    <Collapse in={isGroupCollapseOpen('formatting')} className={classes.collapseContent}>
                      {Object.keys(EditorBlocksFormatting).map(key => (
                        <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
                          <Box
                            className={classes.icon}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            mb={1}
                          >
                            <DashboardIcon />
                          </Box>
                          <Typography variant="h5">
                            {formatMessage({ id: `dictionaries.template_blocks.${key}` })}
                          </Typography>
                        </Box>
                      ))}
                    </Collapse>
                  </>
                )}
                {editorTab === 'fields' && (
                  <Box mt={3}>
                    {Object.keys(EditorFields).map(key => (
                      <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
                        <Box className={classes.icon} display="flex" alignItems="center" justifyContent="center" mb={1}>
                          <DashboardIcon />
                        </Box>
                        <Typography variant="h5">
                          {formatMessage({ id: `dictionaries.template_fields.${key}` })}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                )}
                {editorTab === 'tokens' && (
                  <Box mt={3}>
                    <AdvancedSearch
                      items={[]}
                      onChange={() => {}}
                      placeholder={formatMessage({ id: 'common.search' })}
                    />

                    <Box
                      onClick={() => {
                        setGroupOpen(groups => ({
                          ...groups,
                          crm: !groups.crm,
                        }));
                      }}
                      className={classes.collapseHeader}
                      mt={3}
                    >
                      <Typography variant="h4" color="textSecondary">
                        {formatMessage({ id: 'dms.menu.template_tokens.crm' })}
                      </Typography>
                      {isGroupCollapseOpen('crm') ? <ArrowUpIcon /> : <ArrowDownIcon />}
                    </Box>
                    <Collapse in={isGroupCollapseOpen('crm')} className={classes.collapseContent}>
                      {Object.keys(EditorTokensCrm).map(key => (
                        <Box display="flex" flexDirection="column" alignItems="center" mb={3} className={classes.token}>
                          <Typography variant="h5">
                            {formatMessage({ id: `dictionaries.template_tokens.${key}` })}
                          </Typography>
                        </Box>
                      ))}
                    </Collapse>
                  </Box>
                )}
              </CardContent>
            </Card>
          )}
          {showImages && (
            <Card className={classes.noBorderRadius}>
              <CardContent>
                <AdvancedSearch
                  items={[]}
                  onChange={() => {}}
                  placeholder={formatMessage({ id: 'common.search' })}
                  classes={classes}
                />
                <Box mt={2} />
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <UserAvatar
                      name="Image"
                      avatar={'http://placeimg.com/104/152/arch'}
                      variant="square"
                      className={classes.image}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          )}
          {showAttachments && (
            <Card className={classes.noBorderRadius}>
              <CardContent>
                <AdvancedSearch
                  items={[]}
                  onChange={() => {}}
                  placeholder={formatMessage({ id: 'common.search' })}
                  classes={classes}
                />
                <Box mt={2} />
                <Box pl={1.5} pr={1.5}>
                  <Button
                    fullWidth
                    color="primary"
                    size="small"
                    variant="outlined"
                    startIcon={<AddIcon color="inherit" />}
                  >
                    {formatMessage({ id: 'dms.menu.add_attachements' })}
                  </Button>
                </Box>
                <Box mt={4} />
                {attachments.map((attachment, index) => (
                  <Box
                    key={index}
                    display="flex"
                    alignItems="flex-start"
                    justifyContent="space-between"
                    className={classes.attachment}
                    mb={1}
                  >
                    <Box display="flex" alignItems="flex-start">
                      <AttachIcon className={classes.attachIcon} />
                      <Box ml={0.5} />
                      <Box>
                        <Typography variant="h5">{attachment.fileName}</Typography>
                        <Typography variant="h5">PDF, 36kb</Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Avatar src={'http://placeimg.com/104/152/arch'} variant="square" className={classes.image} />
                    </Box>
                  </Box>
                ))}
              </CardContent>
            </Card>
          )}
        </>
      )}
    </SidebarMenu>
  );
};
