import React, { useState } from 'react';

import { Section } from '../section/Section';
import { useLocale } from 'hooks';
import { List, PropertyItemPlaceholder } from 'ui/molecules';
import { PictureProps } from 'app/shared/media/pictures/Pictures.types';
import { PictureItem } from 'app/shared/media/pictures/pictureItem/PictureItem';
import { useStyles } from 'app/shared/media/pictures/Pictures.styles';
import { EditPictureModalContainer } from 'app/shared/media/pictures/editPictureModal/EditPictureModalContainer';
import { UnCheckMarkIcon, CheckMarkIcon, CardsIcon, ListIcon } from 'ui/atoms/icons';
import { AddPictureModalContainer } from 'app/shared/media/pictures/addPictureModal/AddPictureModalContainer';
import { Picture } from 'api/types';
import { IconButton } from 'ui/atoms';

export const Pictures = ({ pictures, sorting, customLabels, sortQuery }: PictureProps) => {
  const { formatMessage } = useLocale();
  const [picture, setPicture] = useState<Picture | null>();
  const [isAddModaVisible, setAddModalVisible] = useState(false);
  const classes = useStyles();

  return (
    <>
      <Section
        count={pictures.length}
        icon="📷"
        emptyLineFirst={formatMessage({ id: 'pim_details.media.pictures.empty_line_1' })}
        emptyLineSecond={formatMessage({ id: 'pim_details.media.pictures.empty_line_2' })}
        title={formatMessage({ id: 'pim_details.media.pictures.title' })}
        onAdd={() => setAddModalVisible(true)}
        isExpandable
        buttons={
          <>
            <IconButton variant="rounded" size="small">
              <ListIcon />
            </IconButton>
            <IconButton variant="rounded" size="small">
              <CardsIcon />
            </IconButton>
          </>
        }
      >
        {editing => (
          <List<Picture>
            items={pictures}
            itemIndex="id"
            renderItem={(item, isSelected, checkbox) => (
              <PictureItem
                key={item.id}
                picture={item}
                editing={editing}
                checkbox={checkbox}
                onEdit={() => setPicture(item)}
                customLabel={customLabels.find(label => label.value === item.type)}
                isSelected={isSelected}
              />
            )}
            onBulk={() => {}}
            loadingItem={<PropertyItemPlaceholder />}
            sortOptions={sorting.sortOptions}
            onSort={sorting.onSort}
            checkboxProps={{
              className: classes.checkbox,
              icon: <UnCheckMarkIcon />,
              checkedIcon: <CheckMarkIcon color="primary" />,
            }}
            className={classes.list}
            disabled={!editing}
          />
        )}
      </Section>
      {!!picture && (
        <EditPictureModalContainer isModalOpened={!!picture} onModalClose={() => setPicture(null)} picture={picture} />
      )}
      {isAddModaVisible && (
        <AddPictureModalContainer
          onClose={() => setAddModalVisible(false)}
          isOpened={isAddModaVisible}
          sortQuery={sortQuery}
        />
      )}
    </>
  );
};
