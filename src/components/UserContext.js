import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    username: localStorage.getItem('username') || '', // Initialize with stored username if available
  });

  const login = (username) => {
    setUser({ username });
  };

  const logout = () => {
    setUser({ username: '' });
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
