export interface UserInfo {
  id: number,
  name?: string,
  surName?: string,
  login: string,
  password: string,
  height?: number,
  weight?: number,
  age?: number
}

export enum ActionTypes {
  ADD = 'ADD',
  DELETE = 'DELETE',
  EDIT = 'EDIT'
}

export interface UserAction {
  type: ActionTypes
  payload: UserInfo
}

export interface ProviderType {
  users: Array<UserInfo>,
  dispatch: React.Dispatch<UserAction>
}