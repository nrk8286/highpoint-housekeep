import { MaintenanceRequest } from '../types/MaintenanceRequest';

export const maintenanceRequests: MaintenanceRequest[] = [
  {
    id: '1',
    room: {
      id: '1',
      roomNumber: '101',
      buildingSide: 'A',
    },
    description: 'Leaky faucet',
    timestamp: new Date(),
    isResolved: false,
  },
  {
    id: '2',
    room: {
      id: '2',
      roomNumber: '102',
      buildingSide: 'A',
    },
    description: 'Broken light fixture',
    timestamp: new Date(),
    isResolved: false,
  },
];
