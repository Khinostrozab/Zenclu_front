import { useContext } from "react";
import { GlobalState } from "../../context/global-state-provider";

const useAppContext = () => {
  const context = useContext(GlobalState);
  return {
    ...context,
  };
};

export default useAppContext;
