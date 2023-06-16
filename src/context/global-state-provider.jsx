import { useReducer, createContext, memo, useMemo } from "react";
import PropTypes from "prop-types";

const GLOBAL_STATE = {
  isLoggedIn: undefined,
  theme: "light",
  isModalOpen: false,
  user: undefined,
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        user: undefined,
      };
    default:
      return state;
  }
};

export const GlobalState = createContext();
GlobalState.displayName = "GlobalState";
const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, GLOBAL_STATE);

  const value = useMemo(
    () => ({
      ...state,
      login: (payload) => {
        dispatch({ type: "LOGIN", payload });
      },
      logout: () => {
        dispatch({ type: "LOGOUT" });
      },
    }),
    [state]
  );

  return <GlobalState.Provider value={value}>{children}</GlobalState.Provider>;
};

GlobalStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(GlobalStateProvider);
