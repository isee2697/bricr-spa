import React from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';

import { Box } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { List, PropertyItemPlaceholder } from 'ui/molecules';
import { AppRoute } from 'routing/AppRoute.enum';

import { useStyles } from './DetailView.styles';
import { DetailViewProps } from './DetailView.types';
import { DmsDetailViewItem } from './detailViewItem/DetailViewItem';

export const DmsDetailView = ({ data }: DetailViewProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { push } = useHistory();

  return (
    <List
      className="dms-detail-view"
      items={data}
      itemIndex="id"
      sortOptions={[
        { key: 'lastEdited', name: 'Last edited' },
        { key: 'firstEdited', name: 'First edited' },
      ]}
      onSort={key => alert(key)}
      pagination={{
        count: 8,
        currentPerPage: 10,
        perPageOptions: [10, 25, 'All'],
        onPerPageChange: value => {
          alert(value);
        },
      }}
      loadingItem={<PropertyItemPlaceholder />}
      emptyTitle={formatMessage({
        id: 'dms.documents.list_view.empty_line_1',
      })}
      emptyDescription={formatMessage({
        id: 'dms.documents.list_view.empty_line_2',
      })}
      renderItem={(doc, checked, checkbox) => (
        <Box key={doc.id} className={clsx(classes.row, { [classes.rowChecked]: checked }, 'dms-detail-view-row')}>
          {checkbox}
          <Box component="span" className={classes.rowItem}>
            <Box
              className={classes.itemButton}
              onClick={() => {
                push(AppRoute.dms + '/templates/' + doc.id);
              }}
            >
              <DmsDetailViewItem data={doc} />
            </Box>
          </Box>
        </Box>
      )}
    />
  );
};
