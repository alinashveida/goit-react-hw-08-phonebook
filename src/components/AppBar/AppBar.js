import Navigation from "components/Navigation/Navigation";
import AuthNav from "components/AuthNav/AuthNav";
import UserMenu from "components/UserMenu/UserMenu";
import { Header } from "./AppBar.styled";
import authSelector from "redux/auth/auth-selector";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCurrentUser } from "redux/auth/auth-operation";

export default function AppBar() {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <Header>
      {isLoggedIn ? (
        <>
          <Navigation /> <UserMenu />{" "}
        </>
      ) : (
        <AuthNav />
      )}
    </Header>
  );
}
