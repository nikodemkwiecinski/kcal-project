interface Kalories{
  protein: number,
  fat: number,
  carbs: number
}

interface Product{
  productName: string,
  productKcal: Array<Kalories>
}

interface Meal{
  mealName: string,
  products: Array<Product>
}

interface EatingDay{
  date: Date,
  meals: Array<Meal>
}

interface UserSttings{
  totalKcal: number,
  proteinAmout: number,
  fatAmount: number,
  carbsAmount: number
}

export interface UserInfo {
  id: number,
  name?: string,
  surName?: string,
  login: string,
  password: string,
  height?: number,
  weight?: number,
  age?: number,
  meals?: Array<EatingDay>,
  settings?: UserSttings
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

export interface ActiveUserType {
  activeUser: number,
  setActiveUser: React.Dispatch<React.SetStateAction<number>>
}