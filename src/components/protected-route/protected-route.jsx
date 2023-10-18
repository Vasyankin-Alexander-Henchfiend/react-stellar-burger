import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { LOGIN_PAGE, HOME } from "../../utils/consts";

const Protected = ({ onlyUnAuth = false, component }) => {

  const isAuthChecked = useSelector((store) => store.user.isAuthChecked);
  const user = useSelector((store) => store.user.userData);
  const location = useLocation();

  if (!isAuthChecked) {

    return <p>Жди чел!</p>;
  }

  if (onlyUnAuth && user) {

    const { from } = location.state || { from: { pathname: HOME } };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate to={LOGIN_PAGE} state={{ from: location }} />;
  }

  return component;
};

export const OnlyAuth = Protected;
export const OnlyUnAuth = ({ component }) => (
  <Protected onlyUnAuth={true} component={component} />
);