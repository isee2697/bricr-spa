import React, { useState } from 'react';

import { Section } from '../section/Section';
import { useLocale } from 'hooks';
import { List, PropertyItemPlaceholder } from 'ui/molecules';
import { PictureProps } from 'app/pimDetails/sections/media/pictures/Pictures.types';
import { PictureItem } from 'app/pimDetails/sections/media/pictures/pictureItem/PictureItem';
import { useStyles } from 'app/pimDetails/sections/media/pictures/Pictures.styles';
import { EditPictureModalContainer } from 'app/pimDetails/sections/media/pictures/editPictureModal/EditPictureModalContainer';
import { UnCheckMarkIcon, CheckMarkIcon, CardsIcon, ListIcon } from 'ui/atoms/icons';
import { AddPictureModalContainer } from 'app/pimDetails/sections/media/pictures/addPictureModal/AddPictureModalContainer';
import { Picture } from 'api/types';
import { IconButton } from 'ui/atoms';

export const Pictures = ({ pictures, sortOptions, customLabels }: PictureProps) => {
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
        isExpandable={true}
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
                onSelect={() => setPicture(item)}
                customLabel={customLabels.find(label => label.value === item.type)}
              />
            )}
            onBulk={() => {}}
            loadingItem={<PropertyItemPlaceholder />}
            sortOptions={sortOptions}
            checkboxProps={{
              className: classes.checkbox,
              icon: <UnCheckMarkIcon />,
              checkedIcon: <CheckMarkIcon color="primary" />,
            }}
            className={classes.list}
          />
        )}
      </Section>
      {!!picture && (
        <EditPictureModalContainer isModalOpened={!!picture} onModalClose={() => setPicture(null)} picture={picture} />
      )}
      {isAddModaVisible && (
        <AddPictureModalContainer onClose={() => setAddModalVisible(false)} isOpened={isAddModaVisible} />
      )}
    </>
  );
};
