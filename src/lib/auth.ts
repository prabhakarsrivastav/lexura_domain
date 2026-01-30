export const setAuthToken = (token: string) => {
  console.log('[AUTH] Setting token');
  localStorage.setItem('authToken', token);
};

export const getAuthToken = () => {
  const token = localStorage.getItem('authToken');
  console.log('[AUTH] Getting token:', token ? 'exists' : 'none');
  return token;
};

export const removeAuthToken = () => {
  console.log('[AUTH] Removing token');
  localStorage.removeItem('authToken');
};

export const setUser = (user: any) => {
  console.log('[AUTH] Setting user:', user?.email);
  localStorage.setItem('user', JSON.stringify(user));
};

export const getUser = () => {
  const user = localStorage.getItem('user');
  console.log('[AUTH] Getting user:', user ? 'exists' : 'none');
  return user ? JSON.parse(user) : null;
};

export const removeUser = () => {
  console.log('[AUTH] Removing user');
  localStorage.removeItem('user');
};

export const logout = () => {
  console.log('[AUTH] Logout');
  removeAuthToken();
  removeUser();
};
