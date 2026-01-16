import { MaintenanceRequest } from '../types/MaintenanceRequest';

export let maintenanceRequests: MaintenanceRequest[] = [
  {
    id: '1',
    room: {
      id: '1',
      roomNumber: '101',
      buildingSide: 'A',
      type: 'room'
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
      type: 'room'
    },
    description: 'Broken light fixture',
    timestamp: new Date(),
    isResolved: false,
  },
];
