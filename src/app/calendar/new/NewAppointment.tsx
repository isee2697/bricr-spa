import React, { ReactElement, useState } from 'react';
import arrayMutators from 'final-form-arrays';
import { useHistory } from 'react-router-dom';
import clsx from 'classnames';

import { Box, Button, Grid, IconButton, Menu, MenuItem, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { Page } from 'ui/templates';
import {
  BuildingIcon,
  CrmIcon,
  DeleteIcon,
  GraphIcon,
  HistoryIcon,
  HomeIcon,
  MenuIcon,
  ShareIcon,
  TasksIcon,
} from 'ui/atoms/icons';
import { AddAppointmentInput, CalendarTypes } from 'api/types';
import { AutosaveForm } from 'ui/organisms';

import { AppointmentBaseInfoCard } from './cards/baseInfo/BaseInfo';
import { Participant } from './cards/participant/Participant';
import { Location } from './cards/location/Location';
import { EditorCard } from './cards/editor/Editor';
import { NewAppointmentProps } from './NewAppointment.types';
import { AppointmentTypeCard } from './cards/type/AppointmentTypeCard';
import { CheckboxesCard } from './cards/checkboxesCard/CheckboxesCard';
import { useStyles } from './NewAppointment.styles';
import { PencilAppointment } from './cards/pencilAppointment/PencilAppointment';

type SubMenuItemType = {
  title: string;
  onClick?: VoidFunction;
  icon?: ReactElement;
};

const SubMenuItem = ({ title, onClick, icon }: SubMenuItemType) => {
  const classes = useStyles();

  return (
    <MenuItem
      className={classes.menuItem}
      onClick={(event: React.MouseEvent) => {
        event.stopPropagation();
        onClick?.();
      }}
    >
      {icon ?? <HistoryIcon classes={{ root: classes.menuIcon }} />}
      <Box ml={2}>
        <Typography variant="subtitle1">{title}</Typography>
      </Box>
    </MenuItem>
  );
};

export const NewAppointment = ({
  members,
  locations,
  appointmentInfo,
  onSubmit,
  onConfirm,
  loading,
  isEdit,
}: NewAppointmentProps) => {
  const { goBack } = useHistory();
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

  const handleSave = async (values: AddAppointmentInput) => {
    await onSubmit(values);

    return undefined;
  };

  return (
    <AutosaveForm
      initialValues={appointmentInfo}
      keepDirtyOnReinitialize
      mutators={{ ...arrayMutators }}
      onSave={handleSave}
    >
      {({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit} autoComplete="off">
          <Page
            classes={{ container: classes.content }}
            hideBreadcrumb
            title={formatMessage({ id: 'appointment.new.title' })}
            titleActions={
              <Box display="flex" alignItems="center">
                {!isEdit && (
                  <>
                    <Button variant="contained" color="primary" onClick={onConfirm} disabled={loading}>
                      {formatMessage({ id: 'calendar.appointments.create_appointment.confirm' })}
                    </Button>
                    <Box ml={4} />
                  </>
                )}
                <IconButton size="small" variant="roundedContained" className={classes.btnWhite}>
                  <TasksIcon />
                </IconButton>
                <Box
                  ml={7.5}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  className={clsx(classes.statusIcon, 'selected')}
                >
                  <BuildingIcon color="inherit" />
                </Box>
                <Box ml={1} display="flex" alignItems="center" justifyContent="center" className={classes.statusIcon}>
                  <CrmIcon color="inherit" />
                </Box>
                <Box ml={1} />
                <IconButton size="small" variant="roundedContained">
                  <GraphIcon />
                </IconButton>
                <Box ml={1} />
                <IconButton size="small" variant="roundedContained" onClick={onMenuClick} selected={Boolean(menuEl)}>
                  <MenuIcon />
                </IconButton>
                <Box ml={1} />
                <IconButton size="small" variant="roundedContained" onClick={goBack} className={classes.btnBack}>
                  <ShareIcon />
                </IconButton>
                <Menu
                  id="new-appointment-setting-menu"
                  open={Boolean(menuEl)}
                  onClose={onMenuClose}
                  anchorEl={menuEl}
                  placement="bottom-end"
                >
                  <SubMenuItem
                    title={formatMessage({
                      id: 'calendar.appointments.create_appointment.menu.reply',
                    })}
                    onClick={() => {
                      onMenuClose();
                    }}
                    icon={<HomeIcon color="secondary" />}
                  />
                  <SubMenuItem
                    title={formatMessage({
                      id: 'calendar.appointments.create_appointment.menu.reply_to_all',
                    })}
                    onClick={() => {
                      onMenuClose();
                    }}
                  />
                  <SubMenuItem
                    title={formatMessage({
                      id: 'calendar.appointments.create_appointment.menu.notification',
                    })}
                    onClick={() => {
                      onMenuClose();
                    }}
                  />
                  <SubMenuItem
                    title={formatMessage({
                      id: 'calendar.appointments.create_appointment.menu.set_role',
                    })}
                    onClick={() => {
                      onMenuClose();
                    }}
                  />
                  <SubMenuItem
                    title={formatMessage({
                      id: 'calendar.appointments.create_appointment.menu.print',
                    })}
                    onClick={() => {
                      onMenuClose();
                    }}
                  />
                  <SubMenuItem
                    title={formatMessage({
                      id: 'common.delete',
                    })}
                    onClick={() => {
                      onMenuClose();
                    }}
                    icon={<DeleteIcon color="secondary" />}
                  />
                </Menu>
              </Box>
            }
          >
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <AppointmentBaseInfoCard />
                <PencilAppointment />
                <EditorCard />
                {values.type !== CalendarTypes.Birthday && <AppointmentTypeCard />}
              </Grid>
              <Grid item xs={12} md={4}>
                {values.type !== CalendarTypes.Birthday && (
                  <>
                    <Participant members={members} />
                    <Location locations={locations} />
                  </>
                )}
              </Grid>
              {values.type !== CalendarTypes.Birthday && (
                <Grid item xs={12}>
                  <CheckboxesCard />
                </Grid>
              )}
            </Grid>
          </Page>
        </form>
      )}
    </AutosaveForm>
  );
};
