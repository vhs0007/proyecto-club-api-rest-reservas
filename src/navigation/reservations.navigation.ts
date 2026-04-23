import type { FacilityNavigation } from './facility.navigation';
import type { UserNavigation } from './user.navigation';

export interface ReservationsNavigation {
  id: number;
  name: string;
  type: string;
  date: Date;
  hourStart: string;
  hourEnd: string;
  user: UserNavigation | null;
  facility: FacilityNavigation | null;
  cost: number;
  isActive: boolean;
}
