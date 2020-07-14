import React, { createContext, useCallback, useState, useContext } from 'react';
import API from '../services/api';

export const AuthContext = createContext(
  {}
);

export const AuthProvider= ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@betinhooow:token');
    const user = localStorage.getItem('@betinhooow:user');

    if (token && user) {
      API.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {};
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await API.post('sessions', {
      email,
      password,
    });

    const { user, token } = response.data;

    localStorage.setItem('@betinhooow:token', token);
    localStorage.setItem('@betinhooow:user', JSON.stringify(user));

    API.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@betinhooow:token');
    localStorage.removeItem('@betinhooow:user');

    setData({});
  }, []);

  const updateUser = useCallback(user => {
    localStorage.setItem('@betinhooow:user', JSON.stringify(user));

    setData({
      token: data.token,
      user
    })
  }, [setData, data.token]);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth deve ser usar dentro de um provider bro');
  }

  return context;
}
