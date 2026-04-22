import type { UserTypeNavigation } from './user-type.navigation';

export interface UserNavigation {
  id: number;
  name: string;
  type: UserTypeNavigation;
  email: string | null;
  createdAt: Date;
  deletedAt: Date | null;
  isActive: boolean;
}
