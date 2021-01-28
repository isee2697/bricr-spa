import React, { useCallback, useMemo, useState } from 'react';
import { Responsive, WidthProvider, Layout, Layouts } from 'react-grid-layout';
import { useTheme } from '@material-ui/core';
import { useHistory } from 'react-router';

import { useLocale, useModalDispatch } from 'hooks';
import { Box, IconButton, Typography, NavBreadcrumb } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { AddIcon, ManageIcon, ScaleIcon, SettingsIcon } from 'ui/atoms/icons';
import { ActionButtons } from '../common/ActionButtons/ActionButtons';

import { DashboardsHeader } from './header/Header';
import { CreateNewDashboardModalContainer } from './createNewDashboardModal/CreateNewDashboardModalContainer';
import { DashboardCard } from './card/Card';
import { useStyles } from './Dashboards.styles';
import { AddNewChartModal } from './addNewChartModal/AddNewChartModal';
import { DashboardsProps } from './Dashboards.types';

import 'react-grid-layout/css/styles.css';

const ReactGridLayout = WidthProvider(Responsive);

export const Dashboards = ({ cards, onUpdateLayout }: DashboardsProps) => {
  const classes = useStyles();
  const { spacing } = useTheme();
  const { formatMessage } = useLocale();
  const [draggingObject, setDraggingObject] = useState<Layout>();
  const [resizingObject, setResizingObject] = useState<Layout>();
  const { open } = useModalDispatch();

  const { push } = useHistory();

  const generatePlaceholders = (changedLayout: Layout[]) => {
    const newPlaceholders: Layout[] = [];
    const maxHeight = 20;

    for (let xPos = 0; xPos < 4; xPos++) {
      for (let yPos = 0; yPos < maxHeight; yPos++) {
        const isEmpty =
          changedLayout.findIndex(card => {
            if (card.x <= xPos && card.x + card.w > xPos && card.y <= yPos && card.y + card.h > yPos) {
              return true;
            }

            return false;
          }) < 0;

        if (isEmpty) {
          newPlaceholders.push({
            i: `placeholder-${xPos}-${yPos}`,
            x: xPos,
            y: yPos,
            w: 1,
            h: 1,
            isResizable: false,
            isBounded: true,
            moved: true,
          });
        }
      }
    }

    return newPlaceholders;
  };

  const [layout, setLayout] = useState<Layout[]>(cards);
  const [placeholders, setPlaceholders] = useState<Layout[]>(generatePlaceholders(cards));

  const handleUpdateLayout = (changedLayout: Layout[]) => {
    const newLayout = changedLayout.filter(layout => layout.isResizable);

    const layoutChanged =
      newLayout.findIndex(
        card =>
          layout.findIndex(
            l => l.i === card.i && (l.w !== card.w || l.h !== card.h || l.x !== card.x || l.y !== card.y),
          ) >= 0,
      ) >= 0;

    if (layoutChanged) {
      setLayout(newLayout);
      setPlaceholders(generatePlaceholders(newLayout));
    }
  };

  const handleAddNewCard = (newCard: Layout) => {
    setLayout([
      ...layout,
      {
        ...newCard,
        i: `new-${layout.length + 1}`,
        isResizable: true,
      },
    ]);

    setPlaceholders(
      generatePlaceholders([
        ...layout,
        {
          ...newCard,
          i: `new-${layout.length}`,
          isResizable: true,
        },
      ]),
    );

    onUpdateLayout([
      ...layout,
      {
        ...newCard,
        i: `new-${layout.length}`,
        isResizable: true,
      },
    ]);
  };

  const navigateChartDetail = useCallback(
    (id: string) => {
      push(AppRoute.chartDetail.replace(':id', id));
    },
    [push],
  );

  const cardsRendered = useMemo(() => {
    return layout.map(card => (
      <div key={card.i}>
        <DashboardCard
          id={card.i}
          isUpdating={
            (!!resizingObject && card.i === resizingObject.i) || (!!draggingObject && card.i === draggingObject.i)
          }
          onEdit={() => navigateChartDetail(card.i)}
        >
          Card {card.i}
        </DashboardCard>
      </div>
    ));
  }, [draggingObject, layout, navigateChartDetail, resizingObject]);

  const placeholdersRendered = useMemo(() => {
    if (!!resizingObject || !!draggingObject) {
      return [];
    }

    return placeholders.map(placeholder => (
      <div key={placeholder.i}>
        <Box
          className={classes.placeholder}
          onClick={() => {
            open('add_new_chart', { insightDashboardNewType: placeholder });
          }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <IconButton size="small" variant="circle" color="primary">
            <AddIcon color="inherit" />
          </IconButton>
        </Box>
      </div>
    ));
  }, [classes.placeholder, draggingObject, open, placeholders, resizingObject]);

  return (
    <>
      <NavBreadcrumb
        title={formatMessage({ id: 'header.links.insights.dashboards' })}
        to={`${AppRoute.insights}/dashboards`}
      />
      <DashboardsHeader />
      <Box display="flex" alignItems="center" justifyContent="space-between" mt={3}>
        <Typography variant="h1" className={classes.fontWeightBold}>
          {formatMessage({ id: 'insights.dashboard.allocate.title' })}
        </Typography>
        <Box display="flex" alignItems="center">
          <Box mr={1.5}>
            <IconButton variant="rounded" size="small" onClick={() => {}}>
              <SettingsIcon />
            </IconButton>
          </Box>
          <Box mr={1.5}>
            <IconButton variant="rounded" size="small" onClick={() => {}}>
              <ManageIcon />
            </IconButton>
          </Box>
          <Box>
            <ActionButtons id="insights-dashboard-actions" />
          </Box>
        </Box>
      </Box>
      <Box mt={3} />
      <div style={{ position: 'relative' }}>
        <ReactGridLayout
          cols={{ lg: 4, md: 4, sm: 4, xs: 4, xxs: 4 }}
          layouts={{ lg: [...layout, ...placeholders] }}
          onLayoutChange={(changedLayout: Layout[], layouts: Layouts) => {
            handleUpdateLayout(changedLayout);
          }}
          containerPadding={[0, 0]}
          margin={[spacing(2), spacing(2)]}
          draggableHandle=".dragPoint"
          resizeHandle={
            <Box className={classes.resizeHandle}>
              <ScaleIcon />
            </Box>
          }
          onDragStart={(layout: Layout[]) => {
            setDraggingObject(layout[0]);
          }}
          onDragStop={() => {
            setDraggingObject(undefined);
          }}
          onResizeStart={(layout: Layout[]) => {
            setResizingObject(layout[0]);
          }}
          onResizeStop={() => {
            setResizingObject(undefined);
          }}
          className={classes.gridLayout}
          maxRows={20}
          verticalCompact={false}
          preventCollision
        >
          {cardsRendered}
          {placeholdersRendered}
        </ReactGridLayout>
      </div>
      <CreateNewDashboardModalContainer />
      <AddNewChartModal onAddNewChart={handleAddNewCard} />
    </>
  );
};
