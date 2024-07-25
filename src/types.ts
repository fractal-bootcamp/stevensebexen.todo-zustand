export enum AppView {HOME, VIEW, EDIT};
export enum TaskStatus {PENDING, IN_PROGRESS, COMPLETED, ARCHIVED};

export type Todo = {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
};
