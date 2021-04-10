const getAllUsers = (store) => {
  return store.users;
};

const isAuth = (store) => {
  return store.users.token;
};

export default { getAllUsers, isAuth };
