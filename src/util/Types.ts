//Note that:
//Prefix E is the app's convention for Specifing an enum
//Prefix I is the app's convention for Specifing an interface

export enum EReqestStatuses{
  PENDING = 'pending',
  FULLFILLED = 'fullfilled',
  REJECTED = 'rejected'
}

export enum EActionsNames {
  ON_TYPE = 'onType',
  ON_ENTER = 'onEnter',
  ON_DELETE = 'onDelete',
}

export interface IActionMessageBody<T> {
  name: string;
  action: EActionsNames;
  value: T;
}
