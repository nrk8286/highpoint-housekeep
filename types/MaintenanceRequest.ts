import { Room } from './Room';

export interface MaintenanceRequest {
  id: string;
  room: Room;
  description: string;
  timestamp: Date;
  isResolved: boolean;
}
