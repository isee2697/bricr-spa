import React, { ReactElement, useState } from 'react';
import clsx from 'classnames';
import { AnyObject } from 'final-form';
import { useHistory } from 'react-router-dom';

import { PageWithListsHeader } from 'ui/templates/page/PageWithListsCard/PageWithListsHeader';
import { Box, IconButton } from 'ui/atoms';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { useLocale } from 'hooks';
import { useStyles } from 'ui/templates/page/PageWithListsCard/PageWithListsCard.styles';
import { FiltersButton } from 'ui/molecules/filters/FiltersButton';
import { ActiveFilters, hasActiveFilters } from 'ui/molecules/filters/activeFilters/ActiveFilters';
import { ActionTabs, List, ListOptionsMenu, PropertyItemPlaceholder, ColumnModal, ListTableItem } from 'ui/molecules';
import { BaseListType } from 'ui/molecules/list/List.types';
import { SettingsIcon } from 'ui/atoms/icons';
import { GenericField } from 'form/fields';

import { PageWithListsCardProps } from './PageWithListsCard.types';

export const PageWithListsCard: <V, A, F>(
  p: PageWithListsCardProps<V, A, F>,
) => ReactElement<PageWithListsCardProps<V, A, F>> = ({
  withoutHeader = false,
  name,
  onSave,
  initialValues,
  placeholder,
  header,
  formButtons,
  cardTitleId,
  views,
  filters,
  actionTabs,
  list,
  baseRoute,
  optionsMenu,
  isLoading,
  isShowActionTabs = true,
  isShowItemCheckbox = true,
  tableHeader,
}) => {
  const [activeView, setActiveView] = useState(views.findIndex(view => view.isActive) ?? 0);
  const [columnModalOpen, setColumnModalOpen] = useState(false);
  const { push } = useHistory();
  const { formatMessage } = useLocale();
  const isTable = views[activeView]?.isTable;
  const classes = useStyles(isTable);

  const tableSortKey = tableHeader?.sortKey?.split('_')[0];
  const tableSortDirection = tableHeader?.sortKey?.split('_')[1];
  const field = name && (
    <GenericField placeholder={placeholder} name={name ?? ''} id={name} className={classes.inputField} />
  );

  const autosaveForm = onSave ? (
    <AutosaveForm onSave={onSave} initialValues={initialValues ?? {}}>
      {field}
    </AutosaveForm>
  ) : (
    field
  );

  const buttons =
    views.length > 1 ? (
      views.map((view, key) => {
        return (
          <IconButton
            className={key === activeView ? classes.activeList : undefined}
            key={key}
            onClick={() => setActiveView(key)}
            variant="rounded"
            size="small"
          >
            {view.viewIcon}
          </IconButton>
        );
      })
    ) : (
      <></>
    );

  const handleFilterChange = (newFilters: AnyObject) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    filters?.onDelete(newFilters);
  };

  return (
    <Box width="100%">
      {!withoutHeader && <PageWithListsHeader {...header} />}
      {name && (
        <Box mt={-1} width="100%">
          {autosaveForm}
        </Box>
      )}
      <FormSection
        buttons={
          <>
            {buttons}
            {filters && (
              <FiltersButton
                color="primary"
                data={filters.activeFilters}
                filters={filters.availableFilters}
                getActiveFilters={handleFilterChange}
              />
            )}
            {formButtons}
          </>
        }
        title={formatMessage({ id: cardTitleId })}
        isEditable={false}
      >
        {isShowActionTabs && actionTabs && (
          <ActionTabs
            {...actionTabs}
            tabs={actionTabs.tabs?.map(tab => ({
              ...tab,
              label: formatMessage({ id: tab.label, defaultMessage: tab.label }),
            }))}
          />
        )}
        {filters && hasActiveFilters(filters?.activeFilters) && (
          <ActiveFilters className={classes.filters} {...filters} />
        )}
        <List
          {...list}
          loading={isLoading}
          listIndexHeader={
            isTable &&
            tableHeader && (
              <>
                <Box flexGrow={1}>
                  <ListTableItem
                    isHeader
                    onSort={tableHeader.onSort}
                    sortKey={tableSortKey}
                    sortDirection={tableSortDirection === 'down' ? 'down' : 'up'}
                    headerCells={tableHeader.cells}
                  />
                </Box>
                <Box className={classes.rowFilter}>
                  <SettingsIcon className={classes.tableActionCell} onClick={() => setColumnModalOpen(true)} />
                </Box>
              </>
            )
          }
          renderItem={(item, checked, checkbox) => {
            const baseItem = (item as unknown) as BaseListType;

            return (
              <Box
                display="flex"
                key={baseItem.id}
                className={clsx(classes.row, { [classes.rowChecked]: checked }, 'list-row')}
              >
                {isShowItemCheckbox && checkbox}
                <Box
                  flexGrow={1}
                  className={classes.rowItem}
                  onClick={() => baseRoute && push(baseRoute.replace(':id', baseItem.id))}
                >
                  {views[activeView].renderViewComponent(item)}
                </Box>
                <Box className={classes.actionMenu}>
                  <ListOptionsMenu
                    {...optionsMenu}
                    onDeleteClick={!!optionsMenu.onDelete ? () => optionsMenu.onDelete?.(item) : undefined}
                    onEditClick={!!optionsMenu.onEdit ? () => optionsMenu.onEdit?.(item) : undefined}
                  >
                    {optionsMenu.renderChildren?.(item)}
                  </ListOptionsMenu>
                </Box>
              </Box>
            );
          }}
          loadingItem={<PropertyItemPlaceholder />}
        />
      </FormSection>
      <ColumnModal
        columns={tableHeader?.columns ?? []}
        onApply={columns => tableHeader?.setColumns?.(columns)}
        isOpened={!!tableHeader?.setColumns && columnModalOpen}
        onClose={() => setColumnModalOpen(false)}
      />
    </Box>
  );
};
