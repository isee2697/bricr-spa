import React, { ReactElement, useState } from 'react';

import { useLocale } from 'hooks';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { GenericField } from 'form/fields';
import { Box, Grid, Menu, MenuItem, Typography } from 'ui/atoms';
import { ExtraArticleType } from '../DocumentContractFlow.types';
import { SubSectionHeader } from 'ui/molecules';
import { DeleteIcon, HistoryIcon } from 'ui/atoms/icons';
import { useStyles } from '../DocumentContractFlow.styles';

type SubMenuItemType = {
  title: string;
  onClick?: VoidFunction;
  icon?: ReactElement;
};

const SubMenuItem = ({ title, onClick, icon }: SubMenuItemType) => {
  const classes = useStyles();

  return (
    <MenuItem
      className={classes.menuItem}
      onClick={(event: React.MouseEvent) => {
        event.stopPropagation();
        onClick?.();
      }}
    >
      {icon ?? <HistoryIcon classes={{ root: classes.menuIcon }} />}
      <Box ml={2}>
        <Typography variant="subtitle1">{title}</Typography>
      </Box>
    </MenuItem>
  );
};

export function ContractExtraArticlesForm() {
  const { formatMessage } = useLocale();
  const [articles, setArticles] = useState<ExtraArticleType[]>([]);
  const [toggled, setToggled] = useState(0);
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

  return (
    <>
      <FormSection
        title={formatMessage({
          id: 'pim_details.documents.extra_articles',
        })}
        isExpandable
        isInitExpanded
        onAdd={() => {
          setArticles([...articles, { number: '', description: '' }]);
        }}
        onOptionsClick={onMenuClick}
      >
        {editing => (
          <AutosaveForm onSave={() => Promise.resolve(undefined)}>
            {articles.map((articleItem, index) => (
              <React.Fragment key={index}>
                <SubSectionHeader
                  toggled={toggled === index}
                  onToggleClick={() => {
                    setToggled(index);
                  }}
                  onOptionsClick={() => {}}
                >
                  {formatMessage({ id: 'pim_details.documents.article' })} {articleItem.number}
                </SubSectionHeader>

                {toggled === index && (
                  <Box mt={1}>
                    <Grid item xs={12} sm={5}>
                      <GenericField
                        disabled={!editing}
                        name={`articleNumber-${index}`}
                        label="pim_details.documents.article_number"
                        size="medium"
                      />
                    </Grid>
                    <Box mt={1} />
                    <GenericField
                      disabled={!editing}
                      name={`articleDescription-${index}`}
                      label="pim_details.documents.article_description"
                      placeholder="pim_details.documents.article_description.placeholder"
                      size="medium"
                    />
                  </Box>
                )}
              </React.Fragment>
            ))}
          </AutosaveForm>
        )}
      </FormSection>
      <Menu
        id="contract-extra-articles-form-menu"
        open={Boolean(menuEl)}
        onClose={onMenuClose}
        anchorEl={menuEl}
        placement="bottom-end"
      >
        <SubMenuItem
          title={formatMessage({
            id: 'common.delete',
          })}
          onClick={() => {
            onMenuClose();
          }}
          icon={<DeleteIcon color="secondary" />}
        />
      </Menu>
    </>
  );
}
