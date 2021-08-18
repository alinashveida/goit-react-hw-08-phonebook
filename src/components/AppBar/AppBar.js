import Navigation from "components/Navigation/Navigation";
import AuthNav from "components/AuthNav/AuthNav";
import UserMenu from "components/UserMenu/UserMenu";
import { Header } from "./AppBar.styled";
import authSelector from "redux/auth/auth-selector";
import { useSelector } from "react-redux";

export default function AppBar() {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
}
