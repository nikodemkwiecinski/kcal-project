import React, { createContext, useContext, useState } from 'react';

interface UserInfo {
  id: number,
  name: string,
  surName: string
}

const UserStoreContext = createContext<Array<UserInfo> | undefined>([]);

const UserStore = () => {
  const [users, setUsers] = useState<Array<UserInfo>>()

  return ( 
    <UserStoreContext.Provider value={users}> 

    </UserStoreContext.Provider>  
   );
}
 
export default UserStore;