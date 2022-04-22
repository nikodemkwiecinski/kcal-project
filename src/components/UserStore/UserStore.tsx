import React, { createContext, useContext, useReducer, ReactNode } from 'react';

import {ActionTypes, UserAction, UserInfo, ProviderType} from './UserTypes'

const initialUsers: Array<UserInfo> = [
  {
    id: 1,
    login: 'admin',
    password: 'admin'
  },
  {
    id: 2,
    login: 'user',
    password: 'user'
  }
]

const reducer = (state: Array<UserInfo>, action: UserAction): Array<UserInfo> => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'EDIT':
      const newState = state.filter(elem => elem.id != action.payload.id)
      return [...newState, action.payload];
    case 'DELETE':
      return state.filter(elem => elem.id != action.payload.id);
    default:
      return state
  }
}

export const UserStoreContext = createContext<Array<UserInfo> | ProviderType>([]);

const UserStore: React.FC<ReactNode> = ({children}) => {
  const [users, dispatch] = useReducer(reducer, initialUsers)

  return ( 
    <UserStoreContext.Provider value={{users: users, dispatch: dispatch}}> 
      {children}
    </UserStoreContext.Provider>  
   );
}
 
export default UserStore;