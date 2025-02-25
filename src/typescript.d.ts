interface TaskItem {
  id: string;
  task: string;
  date: string;
  isDone: boolean;
}

type TaskList = TaskItem[];
