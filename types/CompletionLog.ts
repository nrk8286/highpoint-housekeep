import { Housekeeper } from './Housekeeper';
import { Room } from './Room';
import { Task } from './Task';

export interface CompletionLog {
  id: string;
  room: Room;
  housekeeper: Housekeeper;
  completedTasks: Task[];
  timestamp: Date;
  taskType: 'standard' | 'deep' | null;
}
