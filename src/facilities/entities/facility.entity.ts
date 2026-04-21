import { Reservation } from '../../reservations/entities/reservation.entity';
import { User } from '../../users/entities/user.entity';

export class MembershipTypeNavigation {
  private _id: number;
  private _clubId: number;
  private _name: string;
  private _price: number;

  constructor(data: Partial<MembershipTypeNavigation>) {
    if (data?.id != null) this._id = data.id;
    if (data?.clubId != null) this._clubId = data.clubId;
    if (data?.name != null) this._name = data.name;
    if (data?.price != null) this._price = data.price;
  }

  get id(): number {
    return this._id;
  }
  set id(value: number) {
    this._id = value;
  }

  get clubId(): number {
    return this._clubId;
  }
  set clubId(value: number) {
    this._clubId = value;
  }

  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }

  get price(): number {
    return this._price;
  }
  set price(value: number) {
    this._price = value;
  }
}

export class Facility {
  private _id: number;
  private _clubId: number;
  private _type: string;
  private _capacity: number;
  private _isActive: boolean;
  private _responsibleWorker?: User;
  private _assistantWorker?: User | null;
  private _activities?: Reservation[];
  private _membershipTypes?: MembershipTypeNavigation[];

  constructor(data: Partial<Facility>) {
    if (data?.id != null) this._id = data.id;
    if (data?.clubId != null) this._clubId = data.clubId;
    if (data?.type != null) this._type = data.type;
    if (data?.capacity != null) this._capacity = data.capacity;
    if (data?.isActive !== undefined) this._isActive = data.isActive;
    if (data?.responsibleWorker !== undefined)
      this._responsibleWorker = data.responsibleWorker;
    if (data?.assistantWorker !== undefined)
      this._assistantWorker = data.assistantWorker;
    if (data?.activities != null) this._activities = data.activities;
    if (data?.membershipTypes != null)
      this._membershipTypes = data.membershipTypes;
  }

  get id(): number {
    return this._id;
  }
  set id(value: number) {
    this._id = value;
  }

  get clubId(): number {
    return this._clubId;
  }
  set clubId(value: number) {
    this._clubId = value;
  }

  get type(): string {
    return this._type;
  }
  set type(value: string) {
    this._type = value;
  }

  get capacity(): number {
    return this._capacity;
  }
  set capacity(value: number) {
    this._capacity = value;
  }

  get isActive(): boolean {
    return this._isActive;
  }
  set isActive(value: boolean) {
    this._isActive = value;
  }

  get responsibleWorker(): User | undefined {
    return this._responsibleWorker;
  }
  set responsibleWorker(value: User | undefined) {
    this._responsibleWorker = value;
  }

  get assistantWorker(): User | null | undefined {
    return this._assistantWorker;
  }
  set assistantWorker(value: User | null | undefined) {
    this._assistantWorker = value;
  }

  get activities(): Reservation[] | undefined {
    return this._activities;
  }
  set activities(value: Reservation[] | undefined) {
    this._activities = value;
  }

  get membershipTypes(): MembershipTypeNavigation[] | undefined {
    return this._membershipTypes;
  }
  set membershipTypes(value: MembershipTypeNavigation[] | undefined) {
    this._membershipTypes = value;
  }
}
