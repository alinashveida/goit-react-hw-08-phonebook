const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getUserName = (state) => state.auth.user.name;

const getLodinError = (state) => state.auth.LodinError;

const getRegistedError = (state) => state.auth.RegistedError;

const getIsFetchingCurrent = (state) => state.auth.isFetchingCurrentUser;

const authSelector = {
  getIsLoggedIn,
  getUserName,
  getIsFetchingCurrent,
  getRegistedError,
  getLodinError,
};

export default authSelector;
