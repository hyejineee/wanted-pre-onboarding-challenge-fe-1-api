export interface Todo {
  content: string;
  createdAt: string;
  id: string;
  title: string;
  updatedAt: string;
  status: "done" | "inProgress" | "notStarted";
  priority: "urgent" | "normal" | "low";
}

export type TodoInput = Pick<
  Todo,
  "title" | "content" | "priority" | "createdAt" | "status"
>;

export interface FindTodosOptions {
  sort?: "createdAt" | "updatedAt" | "priority";
  order?: "asc" | "desc";
  priorityFilter?: Todo["priority"];
  statusFilter?: Todo["status"];
  keyword?: string;
  countOnly?: boolean;
}
