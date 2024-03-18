import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ redirectTo, isAllowed, children }) => {
  if (!isAllowed) return <Navigate to={redirectTo} rep
  lace />;

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
