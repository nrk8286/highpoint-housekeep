export interface Task {
  id: string;
  name: string;
  category: 'housekeeping' | 'maintenance' | 'audit';
  subCategory?: 'standard' | 'deep';
  frequency: 'daily' | 'monthly' | 'as-needed';
  estimatedTime?: number;
}
