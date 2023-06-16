import { yupResolver } from "@hookform/resolvers/yup";
import { loginFormSchema } from "../../schemas/login-form-schema";
import { useForm } from "react-hook-form";
import useMutationLogin from "./use-login-mutation";

const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(loginFormSchema),
    mode: "onChange",
  });

  const { login, isLoading, isError } = useMutationLogin();

  const onSubmit = (data) => {
    login(data);
  };

  return {
    onSubmit: handleSubmit(onSubmit),
    errors,
    isValid,
    register,
    isLoading,
    isError,
  };
};

export default useLoginForm;
