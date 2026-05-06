import type { MembershipTypeNavigation } from './membership-type.navigation';
import type { UserNavigation } from './user.navigation';

export interface FacilityNavigation {
  id: number;
  clubId: number;
  type: string;
  capacity: number;
  isActive: boolean;
  responsibleWorker: UserNavigation | null;
  assistantWorkers: UserNavigation[] | null;
  membershipTypes?: MembershipTypeNavigation[];
}
