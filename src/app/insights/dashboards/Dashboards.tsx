import React, { useState } from 'react';
import { Responsive, WidthProvider, Layout, Layouts } from 'react-grid-layout';
import { useTheme } from '@material-ui/core';

import { useLocale } from 'hooks';
import { NavBreadcrumb, Box } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { ScaleIcon } from 'ui/atoms/icons';

import { DashboardsHeader } from './header/Header';
import { CreateNewDashboardModalContainer } from './createNewDashboardModal/CreateNewDashboardModalContainer';
import { DashboardCard } from './card/Card';
import { useStyles } from './Dashboards.styles';

import 'react-grid-layout/css/styles.css';

const ReactGridLayout = WidthProvider(Responsive);

export const Dashboards = () => {
  const classes = useStyles();
  const { spacing } = useTheme();
  const { formatMessage } = useLocale();
  const [isDragging, setIsDragging] = useState(false);
  const [layout, setLayout] = useState<Layout[]>([
    {
      i: 'a',
      x: 0,
      y: 0,
      w: 1,
      h: 1,
      maxW: 8,
    },
    {
      i: 'b',
      x: 1,
      y: 0,
      w: 1,
      h: 1,
      maxW: 8,
    },
    {
      i: 'c',
      x: 2,
      y: 0,
      w: 1,
      h: 1,
      maxW: 8,
    },
    {
      i: 'd',
      x: 3,
      y: 0,
      w: 1,
      h: 1,
      maxW: 8,
    },
    {
      i: 'e',
      x: 0,
      y: 1,
      w: 1,
      h: 1,
      maxW: 8,
      isResizable: true,
    },
    {
      i: 'f',
      x: 1,
      y: 1,
      w: 1,
      h: 1,
      maxW: 8,
      isResizable: true,
    },
    {
      i: 'g',
      x: 2,
      y: 1,
      w: 1,
      h: 1,
      maxW: 8,
      isResizable: true,
    },
    {
      i: 'h',
      x: 0,
      y: 2,
      w: 1,
      h: 1,
      maxW: 8,
      isResizable: true,
    },
  ]);

  return (
    <>
      <NavBreadcrumb
        title={formatMessage({ id: 'header.links.insights.dashboards' })}
        to={`${AppRoute.insights}/dashboards`}
      />
      <DashboardsHeader />
      <Box mt={3} />
      <div style={{ position: 'relative' }}>
        <ReactGridLayout
          cols={{ lg: 4, md: 4, sm: 4, xs: 4, xxs: 4 }}
          layouts={{ lg: layout }}
          onLayoutChange={(layout: Layout[], layouts: Layouts) => {
            setLayout(layout);
          }}
          containerPadding={[0, 0]}
          margin={[spacing(2), spacing(2)]}
          draggableHandle=".dragPoint"
          resizeHandle={
            <Box className={classes.resizeHandle}>
              <ScaleIcon />
            </Box>
          }
          onDragStart={() => {
            console.log('Debugging dragging');
            setIsDragging(true);
          }}
          onDragStop={() => {
            console.log('Debugging drag stop');
            setIsDragging(false);
          }}
          onResizeStart={() => {
            console.log('Debugging Resize start');
          }}
          onResizeStop={() => {
            console.log('Debugging Resize start');
          }}
        >
          <div key="a">
            <DashboardCard>HTMLSTRING</DashboardCard>
          </div>
          <div key="b">
            <DashboardCard>TTTT</DashboardCard>
          </div>
          <div key="c">
            <DashboardCard>CCCCCCCCCCCCCC</DashboardCard>
          </div>
          <div key="d">
            <DashboardCard>DDDDDD</DashboardCard>
          </div>
          <div key="e">
            <DashboardCard>DDDDDD</DashboardCard>
          </div>
          <div key="f">
            <DashboardCard>DDDDDD</DashboardCard>
          </div>
          <div key="g">
            <DashboardCard>DDDDDD</DashboardCard>
          </div>
          <div key="h">
            <DashboardCard>DDDDDD</DashboardCard>
          </div>
          <div key="i">
            <DashboardCard>DDDDDD</DashboardCard>
          </div>
        </ReactGridLayout>
      </div>
      <CreateNewDashboardModalContainer />
    </>
  );
};
