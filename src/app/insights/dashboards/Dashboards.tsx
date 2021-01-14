import React, { useState } from 'react';
import { Responsive, WidthProvider, Layout, Layouts } from 'react-grid-layout';
import { useTheme } from '@material-ui/core';

import { useLocale, useModalDispatch } from 'hooks';
import { Box, IconButton, NavBreadcrumb } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { AddIcon, ScaleIcon } from 'ui/atoms/icons';

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
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const { open } = useModalDispatch();

  const generatePlaceholders = (changedLayout: Layout[]) => {
    const newPlaceholders: Layout[] = [];
    const maxHeight = changedLayout.reduce((accum: number, card: Layout) => {
      return Math.max(accum, card.y + card.h);
    }, 0);

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
          });
        }
      }
    }

    for (let xPos = 0; xPos < 4; xPos++) {
      newPlaceholders.push({
        i: `placeholder-${xPos}-${maxHeight + 1}`,
        x: xPos,
        y: maxHeight + 1,
        w: 1,
        h: 1,
        isResizable: false,
      });
    }

    return newPlaceholders;
  };

  const [layout, setLayout] = useState<Layout[]>(cards);
  const [placeholders, setPlaceholders] = useState<Layout[]>(generatePlaceholders(cards));

  const handleUpdateLayout = (changedLayout: Layout[]) => {
    const layoutChanged =
      changedLayout
        .filter(card => card.isResizable)
        .findIndex(
          card =>
            layout.findIndex(
              l => l.i === card.i && (l.w !== card.w || l.h !== card.h || l.x !== card.x || l.y !== card.y),
            ) >= 0,
        ) >= 0;

    if (layoutChanged) {
      setLayout(changedLayout);
      setPlaceholders(generatePlaceholders(changedLayout));
    }
  };

  const handleAddNewCard = (newCard: Layout) => {
    setLayout([
      ...layout,
      {
        ...newCard,
        i: `new-${layout.length}`,
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
          layouts={{ lg: [...layout, ...(!isDragging && !isResizing ? placeholders : [])] }}
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
          onDragStart={() => {
            setIsDragging(true);
          }}
          onDragStop={() => {
            setIsDragging(false);
          }}
          onResizeStart={() => {
            setIsResizing(true);
          }}
          onResizeStop={() => {
            setIsResizing(false);
          }}
          className={classes.gridLayout}
        >
          {layout.map(card => (
            <div key={card.i}>
              <DashboardCard>Card {card.i}</DashboardCard>
            </div>
          ))}
          {!isDragging && !isResizing
            ? placeholders.map(placeholder => (
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
              ))
            : []}
        </ReactGridLayout>
      </div>
      <CreateNewDashboardModalContainer />
      <AddNewChartModal onAddNewChart={handleAddNewCard} />
    </>
  );
};
