import { useMutation } from "react-query";
import { UserService } from "../../services";
import { useAppContext } from "../common";
import { useNavigate } from "react-router-dom";

const useMutationLogin = () => {
  const navigate = useNavigate();
  const { data, mutate, isLoading, isError } = useMutation(UserService.login, [
    "login",
  ]);

  const { login: setLoginValues } = useAppContext();

  const onSuccess = (response) => {
    setLoginValues(response);
    navigate("/");
  };

  const login = (payload) => mutate(payload, { onSuccess });

  return {
    data,
    login,
    isLoading,
    isError,
  };
};

export default useMutationLogin;
