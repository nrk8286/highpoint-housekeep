
export interface Room {
  id: string;
  roomNumber: string;
  buildingSide: 'A' | 'B' | 'C' | 'D';
  type: 'room' | 'bathroom' | 'common area';
  notes?: string;
}
