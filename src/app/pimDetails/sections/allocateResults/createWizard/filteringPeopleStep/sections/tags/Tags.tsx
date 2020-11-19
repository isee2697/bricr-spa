import React, { useState } from 'react';

import { Box, Card, CardContent, CardHeader, FormControlLabel, IconButton, Switch, Typography } from 'ui/atoms';
import { ArrowDownIcon, CloseIcon } from 'ui/atoms/icons';
import { SimpleSearch } from 'ui/molecules';
import { useLocale } from 'hooks';
import { useStyles } from '../../FilteringPeopleStep.styles';

import { TagType } from './Tags.types';

export const Tags = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);
  const [mustTagFilter, setMustTagFilter] = useState('');
  const [notMustTagFilter, setNotMustTagFilter] = useState('');

  const handleChangeKey = (name: 'mustTag' | 'notMustTag') => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (name === 'mustTag') {
      setMustTagFilter(e.target.value);
    } else {
      setNotMustTagFilter(e.target.value);
    }
  };

  const mustTags = [
    {
      type: TagType.PriceRange,
      value: {
        from: 2000,
        to: 500000,
      },
    },
    {
      type: TagType.ObjectType,
      value: {
        name: 'Custom name of object type',
      },
    },
    {
      type: TagType.AccountManager,
      value: {
        name: 'Victor Martin Brochner',
      },
    },
  ];

  const notMustTags = [
    {
      type: TagType.PriceRange,
      value: {
        from: 2000,
        to: 500000,
      },
    },
    {
      type: TagType.ObjectType,
      value: {
        name: 'Custom name of object type',
      },
    },
    {
      type: TagType.AccountManager,
      value: {
        name: 'Victor Martin Brochner',
      },
    },
  ];

  return (
    <Card>
      <CardHeader
        title={formatMessage({ id: 'pim_details.allocate_results.tags.title' })}
        action={
          <>
            <FormControlLabel
              control={<Switch checked={isEditing} onChange={() => setIsEditing(!isEditing)} color="primary" />}
              label={formatMessage({ id: 'form_section.edit_mode' })}
              labelPlacement="start"
              className={classes.editSwitcher}
            />
            <IconButton variant="roundedContained" aria-label="open" size="small" onClick={() => {}}>
              <ArrowDownIcon color="inherit" />
            </IconButton>
          </>
        }
      />
      <CardContent>
        <Box>
          <Box display="flex" justifyContent="space-between" mb={1}>
            <Typography variant="h5">
              {formatMessage(
                { id: 'pim_details.allocate_results.tags.relation_have_tag' },
                { strong: <b>{formatMessage({ id: 'pim_details.allocate_results.tags.must' })}</b> },
              )}
            </Typography>
            <Typography variant="h5" className={classes.gray}>
              {formatMessage({ id: 'pim_details.allocate_results.tags.search_one_or_more_tags_below' })}
            </Typography>
          </Box>
          <SimpleSearch value={mustTagFilter} onChange={handleChangeKey('mustTag')} />
          {mustTags.length > 0 && (
            <Box mt={2} className={classes.tagsWrapper} display="flex" alignItems="center" flexWrap="wrap">
              {mustTags.map((tag, index) => (
                <Box className={classes.tag} display="flex" alignItems="center" mr={1}>
                  <Typography variant="h5" className={classes.gray}>
                    {formatMessage({ id: `dictionaries.tag_type.${tag.type}` })}:
                  </Typography>
                  <Typography variant="h5" className={classes.marginLeftHalf}>
                    {tag.type === TagType.PriceRange && (
                      <>
                        {tag.value.from} - {tag.value.to} €
                      </>
                    )}
                    {tag.type === TagType.ObjectType && <>{tag.value.name}</>}
                    {tag.type === TagType.AccountManager && <>{tag.value.name}</>}
                  </Typography>
                  <CloseIcon className={classes.marginLeftHalf} />
                </Box>
              ))}
            </Box>
          )}
        </Box>
        <Box mt={4}>
          <Box display="flex" justifyContent="space-between" mb={1}>
            <Typography variant="h5">
              {formatMessage(
                { id: 'pim_details.allocate_results.tags.relation_have_tag' },
                { strong: <b>{formatMessage({ id: 'pim_details.allocate_results.tags.must_not' })}</b> },
              )}
            </Typography>
            <Typography variant="h5" className={classes.gray}>
              {formatMessage({ id: 'pim_details.allocate_results.tags.search_one_or_more_tags_below' })}
            </Typography>
          </Box>
          <SimpleSearch value={notMustTagFilter} onChange={handleChangeKey('notMustTag')} />
          {notMustTags.length > 0 && (
            <Box mt={2} className={classes.tagsWrapper} display="flex" alignItems="center" flexWrap="wrap">
              {notMustTags.map((tag, index) => (
                <Box className={classes.tag} display="flex" alignItems="center" mr={1}>
                  <Typography variant="h5" className={classes.gray}>
                    {formatMessage({ id: `dictionaries.tag_type.${tag.type}` })}:
                  </Typography>
                  <Typography variant="h5" className={classes.marginLeftHalf}>
                    {tag.type === TagType.PriceRange && (
                      <>
                        {tag.value.from} - {tag.value.to} €
                      </>
                    )}
                    {tag.type === TagType.ObjectType && <>{tag.value.name}</>}
                    {tag.type === TagType.AccountManager && <>{tag.value.name}</>}
                  </Typography>
                  <CloseIcon className={classes.marginLeftHalf} />
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};
