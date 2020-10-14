import React from 'react';
import { Form } from 'react-final-form';

import { Modal, SubmitButton } from 'ui/molecules';
import { Alert, DialogContent, DialogActions, Grid, Button, UserAvatar, Typography } from 'ui/atoms';
import { FollowUpRectangleIcon, UserRectangleIcon, LockRectangleIcon, AddIcon } from 'ui/atoms/icons';
import { DropdownItem } from 'ui/atoms/dropdown/Dropdown.types';
import { requireValidator } from 'form/validators';
import { GenericField, DropdownField, DatePickerField, TimePickerField } from 'form/fields';
import { useLocale } from 'hooks/useLocale/useLocale';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { TeamMemberItem } from 'app/tasks/Tasks.types';
import { TaskPriority, TaskLabel } from 'api/types';
import { CreateNewTaskModalProps, CreateNewTaskSubmit } from 'app/shared/createNewTaskModal/CreateNewTaskModal.types';
import { useStyles } from 'app/shared/createNewTaskModal/CreateNewTaskModal.styles';
import { useAuthState } from 'hooks';

export const CreateNewTaskModal = ({ isOpen, onSubmit, members = [] }: CreateNewTaskModalProps) => {
  const classes = useStyles();
  const { user } = useAuthState();
  const { formatMessage } = useLocale();
  const { close } = useModalDispatch();
  const showMembers = [...members];

  if (user && !showMembers.find(profile => profile.id === user.id)) {
    showMembers.push(user);
  }

  const handleSubmit: CreateNewTaskSubmit = async body => {
    const response = await onSubmit(body);

    if (!response) {
      return;
    }

    if (!response.error) {
    }

    return response;
  };

  const handleClose = () => {
    close('create-new-task');
  };

  const assignees: DropdownItem[] = showMembers.map((member: TeamMemberItem, index: number) => ({
    label: (
      <span className={classes.assignee}>
        <UserAvatar size="small" name={member?.firstName + ' ' + member?.lastName} className={classes.assigneeAvatar} />
        <span>
          {member?.firstName} {member?.lastName}
          {member.id === user?.id && ` (${formatMessage({ id: 'tasks.members.me' })})`}
        </span>
      </span>
    ),
    value: member?.id,
  }));

  const labels: DropdownItem[] = [
    {
      label: (
        <span className={classes.label}>
          <FollowUpRectangleIcon viewBox="0 0 20 20" /> {formatMessage({ id: 'tasks.label.follow_up' })}
        </span>
      ),
      value: TaskLabel.FollowUp,
    },
    {
      label: (
        <span className={classes.label}>
          <UserRectangleIcon viewBox="0 0 20 20" /> {formatMessage({ id: 'tasks.label.business' })}
        </span>
      ),
      value: TaskLabel.Business,
    },
    {
      label: (
        <span className={classes.label}>
          <LockRectangleIcon viewBox="0 0 20 20" /> {formatMessage({ id: 'tasks.label.private' })}
        </span>
      ),
      value: TaskLabel.Private,
    },
  ];

  const priorities: DropdownItem[] = [
    {
      label: formatMessage({ id: 'tasks.priorities.high' }),
      value: TaskPriority.High,
    },
    {
      label: formatMessage({ id: 'tasks.priorities.medium' }),
      value: TaskPriority.Medium,
    },
    {
      label: formatMessage({ id: 'tasks.priorities.low' }),
      value: TaskPriority.Low,
    },
  ];

  return (
    <Form onSubmit={handleSubmit}>
      {({ handleSubmit, form, submitErrors, values }) => (
        <Modal
          fullWidth
          isOpened={isOpen}
          onClose={() => {
            form.reset();
            handleClose();
          }}
          title={formatMessage({ id: 'tasks.create_new.title' })}
        >
          <form
            onSubmit={async event => {
              await handleSubmit(event);
            }}
            autoComplete="off"
          >
            {submitErrors && submitErrors.error === 'unknown' && (
              <DialogContent>
                <Alert severity="error">{formatMessage({ id: 'tasks.create_new.error.unknown' })}</Alert>
              </DialogContent>
            )}
            <DialogContent>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <GenericField
                    name="title"
                    label="tasks.create_new.details.title.label"
                    placeholder="tasks.create_new.details.title.placeholder"
                    validate={[requireValidator]}
                    size="medium"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <DropdownField
                    validate={[requireValidator]}
                    items={assignees}
                    placeholder="tasks.create_new.details.assignee.placeholder"
                    name="assignee"
                    label="tasks.create_new.details.assignee.label"
                    align="left"
                  />
                  <Typography
                    variant="h5"
                    onClick={() => {
                      form.change('assignee', assignees[0].value);
                    }}
                    className={classes.assignToMeButton}
                  >
                    {formatMessage({
                      id: 'tasks.create_new.details.assignee.assign_to_me',
                    })}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <DropdownField
                    validate={[requireValidator]}
                    items={labels}
                    placeholder="tasks.create_new.details.label.placeholder"
                    name="label"
                    label="tasks.create_new.details.label.label"
                    align="left"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <DatePickerField
                    name="startDate"
                    placeholder="tasks.create_new.details.start_date.placeholder"
                    label="tasks.create_new.details.start_date.label"
                  />
                </Grid>
                <Grid item xs={6}>
                  <DropdownField
                    validate={[requireValidator]}
                    items={priorities}
                    placeholder="tasks.create_new.details.priority.placeholder"
                    label="tasks.create_new.details.priority.label"
                    name="priority"
                    align="left"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <DatePickerField
                    name="deadline"
                    placeholder="tasks.create_new.details.deadline_date.placeholder"
                    label="tasks.create_new.details.deadline_date.label"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TimePickerField
                    name="deadlineTime"
                    placeholder="tasks.create_new.details.deadline_time.placeholder"
                    label="tasks.create_new.details.deadline_time.label"
                    disableToolbar={false}
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button color="ghost" size="small">
                {formatMessage({ id: 'common.cancel' })}
              </Button>
              <SubmitButton
                type="submit"
                startIcon={<AddIcon color="inherit" />}
                size="large"
                color="primary"
                variant="contained"
              >
                {formatMessage({ id: 'tasks.create_new.title' })}
              </SubmitButton>
            </DialogActions>
          </form>
        </Modal>
      )}
    </Form>
  );
};
