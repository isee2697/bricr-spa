import React, { ReactElement, useState } from 'react';

import { useLocale, useModalDispatch } from 'hooks';
import { Pim } from 'api/types';
import { PropertyItem } from 'ui/molecules';
import { Box, Menu, MenuItem, Typography } from 'ui/atoms';
import { DeleteIcon, HistoryIcon } from 'ui/atoms/icons';
import { PropertyCategory } from 'app/shared/addPimModal/AddPimModal.types';

import { useStyles } from './PimItem.styles';

const generateNonemptyList = (obj: { [key: string]: unknown }) =>
  Object.keys(obj)
    .filter(key => !!obj[key])
    .reduce((list, key) => [...list, key], [] as string[]);

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

export const PimItem = ({
  id,
  street,
  houseNumberPrefix,
  houseNumber,
  houseNumberAddition,
  constructionNumberPrefix,
  constructionNumber,
  constructionNumberAddition,
  city,
  dateCreated,
  livingArea,
  propertyType,
  pictures,
  salePrice,
  rentPrice,
  completeness,
  attentionNote,
  archived,
  mainPicture,
}: Pim) => {
  const { formatMessage } = useLocale();
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);
  const { open } = useModalDispatch();

  const title = `${street} ${houseNumberPrefix ?? ''}${houseNumber}${houseNumberAddition ?? ''}${
    constructionNumber
      ? ` (${constructionNumberPrefix ?? ''}${constructionNumber}${constructionNumberAddition ?? ''})`
      : ''
  }, ${city}`;
  const labels = generateNonemptyList({ [`${livingArea} m2`]: livingArea, [`${propertyType}`]: propertyType });
  const stageItems = !archived
    ? ['Acquisition', 'Order', 'List up', 'Reactions', 'Bidding', 'Sign'].map(title => ({
        title,
      }))
    : undefined; // TODO: replace it with real transaction data
  const categories = !archived
    ? generateNonemptyList({
        [formatMessage({ id: 'pim.type.sale' })]: salePrice,
        [formatMessage({ id: 'pim.type.rent' })]: rentPrice,
      })
    : [formatMessage({ id: 'property_item.sold' })];

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

  return (
    <>
      <PropertyItem
        image={mainPicture?.file?.url ?? undefined}
        date={dateCreated}
        title={title}
        labels={labels}
        salePrice={salePrice}
        rentPrice={rentPrice}
        completeness={completeness}
        categories={categories}
        stageItems={stageItems}
        stageIndex={0}
        onMenuClick={onMenuClick}
        isArchived={archived}
        formerOwners="Unknown"
        buyers="Unknown"
        alert={attentionNote ? attentionNote : undefined}
      />
      <Menu
        id={`pim-item-menu-${id}`}
        open={Boolean(menuEl)}
        onClose={onMenuClose}
        anchorEl={menuEl}
        placement="bottom-end"
      >
        <SubMenuItem
          title={formatMessage({
            id: 'pim.menu.move_pim',
          })}
          onClick={() => {
            open('move-pim-item', { propertyCategory: PropertyCategory.PROPERTY, propertyType });
            onMenuClose();
          }}
        />
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
};
