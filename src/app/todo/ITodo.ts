enum Status {
  Completed     = 1,
  Cancelled     = 0,
}

enum Priority {
  High    = 1,
  Medium  = 2,
  Low     = 3,
}

enum TodoActionType {
  STATUS_CHANGE   = 'STATUS_CHANGE',
  SELECTED        = 'SELECTED'
}

interface ITodoAction {
  id: string;
  type: TodoActionType;
  status?: Number;
  selected?: Boolean;
}

interface ITodo {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  delivery_date: string;
  groupId?: string;
  status?: Status;
}

export {
  ITodo,
  Priority,
  Status,
  ITodoAction,
  TodoActionType
};
