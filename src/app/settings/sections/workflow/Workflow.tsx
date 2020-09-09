import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Box, IconButton, NavBreadcrumb } from 'ui/atoms';
import { FullscreenOnIcon, FullscreenOffIcon } from 'ui/atoms/icons';
import { AppRoute } from 'routing/AppRoute.enum';
import { PageHeader } from 'ui/templates/page/header/PageHeader';

import { WorkflowProps, AddItemData } from './Workflow.types';
import { useStyles } from './Workflow.styles';
import { WorkflowHeader } from './workflowHeader/WorkflowHeader';
import { WorkflowSidebar } from './workflowSidebar/WorkflowSidebar';
import { WorkflowSection } from './workflowSection/WorkflowSection';
import { useSections } from './useSections';

export const Workflow = ({
  onToggleFullScreen,
  name,
  iconName,
  goBack,
  actionsGroups,
  triggersGroups,
  initValues,
  onAddSection,
  onAddItem,
}: WorkflowProps) => {
  const { id } = useParams<{ id: string }>();
  const [fullScreen, setFullScreen] = useState(true);
  const classes = useStyles({ fullScreen });

  const [sections, addSection, addItem] = useSections(initValues);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const handleFullScreenToggle = () => {
    onToggleFullScreen(!fullScreen);
    setFullScreen(t => !t);
  };

  const handleAddSection = async () => {
    const newSectionId = `s${sections.length + 1}`;

    addSection(newSectionId, `Workflow section ${sections.length + 1}`);
    setExpandedSection(newSectionId);

    return onAddSection();
  };

  const handleAddItem = (data: AddItemData) => {
    addItem(data);
    onAddItem(data);
  };

  return (
    <div className={classes.container}>
      <NavBreadcrumb title={name} urlBase={AppRoute.workflow.replace(':id', id)} />
      {!fullScreen && (
        <Box paddingBottom={2}>
          <PageHeader />
        </Box>
      )}
      <WorkflowHeader
        name={name}
        iconName={iconName}
        onAdd={handleAddSection}
        onBack={goBack}
        onRedo={() => {}}
        onUndo={() => {}}
      />

      <DndProvider backend={HTML5Backend}>
        <Box display="flex">
          <Box width={216}>
            <WorkflowSidebar isFullScreen={fullScreen} actionsGroups={actionsGroups} triggersGroups={triggersGroups} />
          </Box>
          <Box width="100%">
            {!!expandedSection && (
              <WorkflowSection
                section={sections.find(({ id }) => id === expandedSection) ?? sections[0]}
                expanded
                onExpanded={() => setExpandedSection(null)}
                onAddItem={handleAddItem}
              />
            )}
            {!expandedSection &&
              sections.map(section => (
                <WorkflowSection
                  key={section.id}
                  section={section}
                  expanded={false}
                  onExpanded={() => setExpandedSection(section.id)}
                  onAddItem={handleAddItem}
                />
              ))}
          </Box>
        </Box>
      </DndProvider>

      <div className={classes.controlContainer}>
        <IconButton onClick={handleFullScreenToggle} variant="rounded" size="small" className={classes.controlButton}>
          {fullScreen ? <FullscreenOffIcon /> : <FullscreenOnIcon />}
        </IconButton>
      </div>
    </div>
  );
};
