export enum TaskPriority {
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low',
}

export enum TaskStatus {
  TODO = 'todo',
  IN_PROGRESS = 'inprogress',
  BLOCKED = 'blocked',
  DONE = 'done',
}

export enum TaskLabel {
  FOLLOW_UP = 'followup',
  BUSINESS = 'business',
  PRIVATE = 'private',
}

export enum TasksViewMode {
  LIST = 'list',
  SWIMLANE = 'swimlane',
}
