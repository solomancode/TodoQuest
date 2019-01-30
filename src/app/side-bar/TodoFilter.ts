enum TodoFilters {
  All         = 'all',
  Today       = 'today',
  Week        = 'week',
  Completed   = 'completed',
  Cancelled   = 'cancelled',
  Group       = 'group'
}

interface ITodoFilter {
  label: String;
  filter: TodoFilters;
  parentGroupId?: String;
}

class TodoFilter implements ITodoFilter {

  label: String;
  filter: TodoFilters;
  parentGroupId: String;
  query: String;

  constructor(label, filter, parentGroupId?) {
    this.label = label;
    this.filter = filter;
    if (this.filter === TodoFilters.Group && parentGroupId) {
      this.parentGroupId = parentGroupId;
    }
  }
}

export {
  TodoFilter,
  TodoFilters,
  ITodoFilter
};
