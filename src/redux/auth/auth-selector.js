const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getUserName = (state) => state.auth.user.name;

const authSelector = {
  getIsLoggedIn,
  getUserName,
};

export default authSelector;
