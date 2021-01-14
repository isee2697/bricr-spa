import React, { useState } from 'react';
import * as uuid from 'uuid';

import { CHART_DATA } from 'api/mocks/insights';
import { AppRoute } from 'routing/AppRoute.enum';
import { ChartDataType } from 'app/insights/chartDetail/ChartDetail.types';

import { ChartDetail } from './ChartDetail';
import { DatasourceCanvasType } from './chartData/datasourceCanvas/DatasourceCanvas.types';

export const ChartDetailContainer = () => {
  const [data, setData] = useState(CHART_DATA);

  const handleUpdate = async (newData: ChartDataType) => {
    setData(newData);

    return { error: false };
  };

  const handleAddSource = (type: string, targetSourceGroup: DatasourceCanvasType) => {
    const newData = { ...data };
    let sources = newData.sources;

    if (!sources) {
      sources = {
        xSources: [],
        ySources: [],
        breakdown: [],
      };
    }

    sources[targetSourceGroup].push({
      id: uuid.v4(),
      type,
    });

    newData.sources = sources;

    setData(newData);
  };

  const handleRemoveSource = (id: string) => {};

  return (
    <ChartDetail
      path={AppRoute.chartDetail}
      data={data}
      onUpdate={handleUpdate}
      onAddSource={handleAddSource}
      onRemoveSource={handleRemoveSource}
    />
  );
};
