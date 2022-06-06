interface Kalories {
  carbs: number;
  fat: number;
  protein: number;
}

interface Product {
  productKcal: Array<Kalories>;
  productName: string;
}

interface Meal {
  mealName: string;
  products: Array<Product>;
}

interface EatingDay {
  date: Date;
  meals: Array<Meal>;
}

interface UserSttings {
  carbsAmount: number;
  fatAmount: number;
  proteinAmout: number;
  totalKcal: number;
}

export interface UserInfo {
  activity?: number;
  age?: number;
  calories?: number;
  carbs?: number;
  fats?: number;
  height?: number;
  id: number;
  login: string;
  meals?: Array<EatingDay>;
  name?: string;
  password: string;
  proteins?: number;
  settings?: UserSttings;
  surName?: string;
  steps?: number;
  water?: number;
  weight?: number;
}

export enum ActionTypes {
  ADD = "ADD",
  DELETE = "DELETE",
  EDIT = "EDIT",
}

export interface UserAction {
  payload: UserInfo;
  type: ActionTypes;
}

export interface ProviderType {
  users: Array<UserInfo>;
  dispatch: React.Dispatch<UserAction>;
}

export interface ActiveUserType {
  activeUser: number;
  setActiveUser: React.Dispatch<React.SetStateAction<number>>;
}
