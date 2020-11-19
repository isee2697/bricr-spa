import React, { useState } from 'react';

import { useLocale } from 'hooks';
import { AddIcon, CloseIcon } from 'ui/atoms/icons';
import { GenericField } from 'form/fields';
import { FormModal } from 'ui/organisms';
import { Box, Chip, Typography } from 'ui/atoms';

import { DmsEditImageDialogProps } from './DmsEditImageDialog.types';
import { useStyles } from './DmsEditImageDialog.styles';

export const DmsEditImageDialog = ({ isOpened, onClose, onSubmit, image }: DmsEditImageDialogProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState(image.tags || []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      tags.push(tag);
      setTag('');
    }
  };

  const handleDeleteTag = (tag: string) => {
    const newTags = [...tags];
    const index = newTags.indexOf(tag);

    if (index < newTags.length) {
      newTags.splice(index, 1);
    }

    setTags(newTags);
  };

  return (
    <FormModal
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={onSubmit}
      title={formatMessage({
        id: 'dms.images.add_tag.title',
      })}
      initialValues={{ tags }}
      addText={formatMessage({ id: 'dms.images.add_tag' })}
      addIcon={<AddIcon color="inherit" />}
    >
      <GenericField
        name="tagName"
        placeholder={formatMessage({
          id: 'dms.images.add_tag.placeholder',
        })}
        label={formatMessage({ id: 'dms.images.add_tag.title' })}
        value={tag}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTag(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Box mt={3} mx={1.5} display="flex" flexWrap="wrap">
        {tags.map(tag => (
          <Box mr={1} mt={1} key={tag}>
            <Chip
              label={<Typography variant="h4">{tag}</Typography>}
              onDelete={() => handleDeleteTag(tag)}
              deleteIcon={<CloseIcon className={classes.closeIcon} />}
              classes={{ root: classes.chipItem }}
            />
          </Box>
        ))}
      </Box>
    </FormModal>
  );
};
