import React, { useState } from 'react';

import { Section } from '../section/Section';
import { useLocale } from 'hooks';
import { List, PropertyItemPlaceholder } from 'ui/molecules';
import { Picture, PictureProps } from 'app/pimDetails/sections/media/pictures/Pictures.types';
import { PictureItem } from 'app/pimDetails/sections/media/pictures/pictureItem/PictureItem';
import { useStyles } from 'app/pimDetails/sections/media/pictures/Pictures.styles';
import { EditPictureModalContainer } from 'app/pimDetails/sections/media/pictures/editPictureModal/EditPictureModalContainer';
import { UnCheckMarkIcon, CheckMarkIcon } from 'ui/atoms/icons';
import { AddPictureModalContainer } from 'app/pimDetails/sections/media/pictures/addPictureModal/AddPictureModalContainer';

export const Pictures = ({ pictures, sortOptions }: PictureProps) => {
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
      >
        {editing => (
          <List<Picture>
            items={pictures}
            itemIndex="title"
            renderItem={(item, isSelected, checkbox) => (
              <PictureItem picture={item} editing={editing} checkbox={checkbox} onSelect={() => setPicture(item)} />
            )}
            onBulk={selectedItems => alert(JSON.stringify(selectedItems))}
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
