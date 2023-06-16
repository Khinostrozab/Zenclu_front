import { memo } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useAppContext } from "../../../hooks/common";

const PrivateRouter = ({ children }) => {
  const { isLoggedIn } = useAppContext();
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

PrivateRouter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(PrivateRouter);
