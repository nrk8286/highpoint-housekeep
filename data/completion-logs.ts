import { CompletionLog } from '../types/CompletionLog';
import { rooms } from './rooms';
import { housekeepers } from './housekeepers';
import { tasks } from './tasks';

export const completionLogs: CompletionLog[] = [
  {
    id: '1',
    room: rooms[0],
    housekeeper: housekeepers[0],
    completedTasks: [tasks[0], tasks[1]],
    timestamp: new Date('2023-10-26T10:00:00Z'),
    taskType: 'standard',
  },
  {
    id: '2',
    room: rooms[1],
    housekeeper: housekeepers[1],
    completedTasks: [tasks[0], tasks[1], tasks[2]],
    timestamp: new Date('2023-10-26T11:00:00Z'),
    taskType: 'standard',
  },
];
