import { Task } from '../types/Task';

export const tasks: Task[] = [
  // Standard Cleaning Tasks
  { id: '1', name: 'Dusting', category: 'housekeeping', subCategory: 'standard', frequency: 'daily', estimatedTime: 10 },
  { id: '2', name: 'Vacuuming', category: 'housekeeping', subCategory: 'standard', frequency: 'daily', estimatedTime: 10 },
  { id: '3', name: 'Mop Floors', category: 'housekeeping', subCategory: 'standard', frequency: 'daily', estimatedTime: 10 },
  { id: '4', name: 'Clean Bathroom', category: 'housekeeping', subCategory: 'standard', frequency: 'daily', estimatedTime: 15 },
  { id: '5', name: 'Make Bed', category: 'housekeeping', subCategory: 'standard', frequency: 'daily', estimatedTime: 5 },
  { id: '6', name: 'Empty Trash', category: 'housekeeping', subCategory: 'standard', frequency: 'daily', estimatedTime: 2 },

  // Deep Cleaning Tasks
  { id: '7', name: 'Wash Windows', category: 'housekeeping', subCategory: 'deep', frequency: 'monthly', estimatedTime: 20 },
  { id: '8', name: 'Clean Under Furniture', category: 'housekeeping', subCategory: 'deep', frequency: 'monthly', estimatedTime: 15 },
  { id: '9', name: 'Shampoo Carpets', category: 'housekeeping', subCategory: 'deep', frequency: 'monthly', estimatedTime: 30 },
  { id: '10', name: 'Deep Clean Bathroom', category: 'housekeeping', subCategory: 'deep', frequency: 'monthly', estimatedTime: 30 },
  { id: '11', name: 'Dust and Clean Light Fixtures', category: 'housekeeping', subCategory: 'deep', frequency: 'monthly', estimatedTime: 10 },
  { id: '12', name: 'Wipe Down Walls', category: 'housekeeping', subCategory: 'deep', frequency: 'monthly', estimatedTime: 20 },

  // Maintenance & Audit Tasks
  { id: '13', name: 'Replace Lightbulb', category: 'maintenance', frequency: 'as-needed' },
  { id: '14', name: 'Check Fire Extinguisher', category: 'audit', frequency: 'monthly' },
];
