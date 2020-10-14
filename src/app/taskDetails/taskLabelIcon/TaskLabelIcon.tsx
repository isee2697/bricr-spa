import React from 'react';

import { TaskLabel } from 'api/types';
import { UserRectangleIcon, FollowUpRectangleIcon, LockRectangleIcon } from 'ui/atoms/icons';

import { TaskLabelIconProps } from './TaskLabelIcon.types';

export const TaskLabelIcon = ({ type, className }: TaskLabelIconProps) => {
  switch (type) {
    case TaskLabel.Business:
      return <UserRectangleIcon viewBox="0 0 20 20" className={className} />;
    case TaskLabel.FollowUp:
      return <FollowUpRectangleIcon viewBox="0 0 20 20" className={className} />;
    case TaskLabel.Private:
      return <LockRectangleIcon viewBox="0 0 20 20" className={className} />;
    default:
      return <UserRectangleIcon viewBox="0 0 20 20" className={className} />;
  }
};
