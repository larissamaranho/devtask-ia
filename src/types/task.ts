export type TaskStatus = 'pendente' | 'concluída';

export type TaskPriority = 'baixa' | 'média' | 'alta';

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: TaskPriority;
  status: TaskStatus;
}