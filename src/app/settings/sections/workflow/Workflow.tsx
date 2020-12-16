import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Box, IconButton, NavBreadcrumb } from 'ui/atoms';
import { FullscreenOnIcon, FullscreenOffIcon } from 'ui/atoms/icons';
import { AppRoute } from 'routing/AppRoute.enum';
import { PageHeader } from 'ui/templates/page/header/PageHeader';
import { WorkflowSection } from 'api/types';

import { WorkflowProps } from './Workflow.types';
import { useStyles } from './Workflow.styles';
import { WorkflowHeader } from './workflowHeader/WorkflowHeader';
import { WorkflowSidebar } from './workflowSidebar/WorkflowSidebar';
import { WorkflowSectionExpanded } from './workflowSectionExpanded/WorkflowSectionExpanded';
import { WorkflowSectionCollapsed } from './workflowSectionCollapsed/WorkflowSectionCollapsed';
import { WorkflowSectionSettings } from './workflowSectionSettings/WorkflowSectionSettings';

export const Workflow = ({
  onToggleFullScreen,
  name,
  iconName,
  isNew,
  goBack,
  actionsGroups,
  triggersGroups,
  workflowSections,
  onAddSection,
  ...otherProps
}: WorkflowProps) => {
  const { id } = useParams<{ id: string }>();
  const [fullScreen, setFullScreen] = useState(true);
  const classes = useStyles({ fullScreen });

  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [sectionSettings, showSettingsDialog] = useState<string | null>(isNew ? workflowSections[0].id : null);
  const [showSettings, setShowSettings] = useState(false);

  const handleFullScreenToggle = () => {
    onToggleFullScreen(!fullScreen);
    setFullScreen(t => !t);
  };

  const handleAddSection = async () => {
    setShowSettings(true);
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
              <WorkflowSectionExpanded
                section={workflowSections.find(({ id }) => id === expandedSection) ?? workflowSections[0]}
                onCollapse={() => setExpandedSection(null)}
                onSettings={() => {
                  showSettingsDialog(expandedSection);
                  setShowSettings(true);
                }}
                {...otherProps}
              />
            )}
            {!expandedSection &&
              workflowSections.map(section => (
                <WorkflowSectionCollapsed
                  key={section.id}
                  section={section}
                  onExpand={() => setExpandedSection(section.id)}
                  onSettings={() => {
                    setShowSettings(true);
                    showSettingsDialog(section.id);
                  }}
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

      {showSettings && (
        <WorkflowSectionSettings
          templateId={id}
          onClose={() => {
            setShowSettings(false);
            showSettingsDialog(null);
          }}
          isOpened={showSettings}
          workflowSection={
            (sectionSettings && workflowSections.find(section => section.id === sectionSettings)) || undefined
          }
          onSubmit={(section: WorkflowSection) => {
            setShowSettings(false);
            showSettingsDialog(null);

            if (!section.id || section.id === '') {
              onAddSection({
                name: section.name,
                workflowTemplateId: section.workflowTemplateId,
                startpoint: section.startpoint,
                startpointOutside: section.startpointOutside,
                endpoint: section.endpoint,
                endpointOutside: section.endpointOutside,
              });
            } else {
              // TODO: Update section
            }
          }}
        />
      )}
    </div>
  );
};
