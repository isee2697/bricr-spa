import React from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import { useLocale } from 'hooks';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { Box } from 'ui/atoms';
import { ChartDataProps } from '../ChartDetail.types';

import { DatasourceSidebar } from './datasourceSidebar/DatasourceSidebar';
import { DatasourceCanvas } from './datasourceCanvas/DatasourceCanvas';
import { DatasourceGroup, DatasourceGroupItem } from './datasourceSidebar/DatasourceSidebar.types';
import { DATASOURCE_GROUPS } from './datasourceCanvas/dictionaries';

export function ChartData({ data, onAddSource, onRemoveSource }: ChartDataProps) {
  const { formatMessage } = useLocale();

  const sourceGroups: DatasourceGroup[] = DATASOURCE_GROUPS;

  const sourceItems: DatasourceGroupItem[] = sourceGroups.reduce(
    (acc: DatasourceGroupItem[], val) => [...acc, ...val.items],
    [],
  );

  return (
    <FormSection title={formatMessage({ id: 'insights.chart_details.chart_data' })} isExpandable isInitExpanded>
      {editing => (
        <AutosaveForm onSave={() => Promise.resolve(undefined)}>
          <DndProvider backend={HTML5Backend}>
            <Box display="flex">
              <Box width={230}>
                <DatasourceSidebar sourceGroups={sourceGroups} />
              </Box>
              <Box width="100%" height="100%">
                <DatasourceCanvas
                  sources={data.sources}
                  sourceItems={sourceItems}
                  onAddSource={onAddSource}
                  onRemoveSource={onRemoveSource}
                />
              </Box>
            </Box>
          </DndProvider>
        </AutosaveForm>
      )}
    </FormSection>
  );
}
