import { useMutation } from "react-query";
import { UserService } from "../../services";
import { useNavigate } from "react-router-dom";

const useRegisterUserMutation = () => {
  const navigate = useNavigate();
  const { data, mutate, isLoading, isError } = useMutation(
    UserService.createUser,
    ["create-user"]
  );

  const onSuccess = () => {
    navigate("/login");
  };

  const createUser = (payload) => mutate(payload, { onSuccess });

  return {
    data,
    createUser,
    isLoading,
    isError,
  };
};

export default useRegisterUserMutation;
