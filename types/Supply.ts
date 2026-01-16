
export interface Supply {
  id: string;
  name: string;
  unit: 'each' | 'box' | 'gallon';
  parLevel: number;
  reorderPoint: number;
  linkedTasks?: string[];
  usagePerCompletion?: number;
}
