const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getUserName = (state) => state.auth.user.name;

const getIsFetchingCurrent = (state) => state.auth.isFetchingCurrentUser;

const authSelector = {
  getIsLoggedIn,
  getUserName,
  getIsFetchingCurrent,
};

export default authSelector;
