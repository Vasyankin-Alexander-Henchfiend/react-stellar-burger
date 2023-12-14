import { useSelector } from "../../services/hooks/hooks";
import { Navigate, useLocation } from "react-router-dom";
import { LOGIN_PAGE, HOME } from "../../utils/consts";
import Preloader from "../preloader/preloader";
import { TProtectedRoute } from "./protected-route.types";

const Protected = ({ onlyUnAuth = false, component }: TProtectedRoute): JSX.Element | null => {

  const { isAuthChecked, userData } = useSelector((store) => store.user);

  const location = useLocation();

  if (!isAuthChecked) {
    return <Preloader />;
  }

  if (onlyUnAuth && userData) {
    const { from } = location.state || { from: { pathname: HOME } };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !userData) {
    return <Navigate to={LOGIN_PAGE} state={{ from: location }} />;
  }

  return component;
};

export const OnlyAuth = Protected;
export const OnlyUnAuth = ({ component }: TProtectedRoute) => (
  <Protected onlyUnAuth={true} component={component} />
);