import { useDrag } from 'react-dnd';
import React from 'react';

import { Box } from 'ui/atoms';
import { useLocale } from 'hooks';
import { ContractTemplatesDetailsFieldItem } from '../../fieldItem/FieldItem';
import { DndItemState } from '../../fieldItem/FieldItem.types';

import { useStyles } from './SidebarItem.styles';
import { ContractTemplatesDetailsSidebarItemProps } from './SidebarItem.types';

export const ContractTemplatesDetailsSidebarItem = ({
  item,
  searchValue,
}: ContractTemplatesDetailsSidebarItemProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { value, icon } = item;
  const title = formatMessage({ id: `dictionaries.contract_templates_details.${value}` });

  const [, drag, preview] = useDrag({
    item: {
      type: 'AddContractTemplateArticleGroupField',
      ...item,
    },
  });

  const getHighlightedString = () => {
    if (!searchValue.trim()) {
      return title;
    }

    const parts = title?.split(new RegExp(`(${searchValue})`, 'gi'));

    return parts?.map((part, index) =>
      part.toLowerCase().match(searchValue.toLowerCase()) ? (
        <Box key={index} className={classes.highlightedText} component="span">
          {part}
        </Box>
      ) : (
        part
      ),
    );
  };

  return (
    <div ref={drag} className={classes.root}>
      <Box mb={2}>
        <ContractTemplatesDetailsFieldItem icon={icon} title={getHighlightedString()} state={DndItemState.Static} />
      </Box>
      <div ref={preview} className={classes.previewItem}>
        <ContractTemplatesDetailsFieldItem icon={icon} title={title} state={DndItemState.Dragged} />
      </div>
    </div>
  );
};
