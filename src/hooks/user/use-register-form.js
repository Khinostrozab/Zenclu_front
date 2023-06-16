import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerUserFormSchema } from "../../schemas/register-user-form-schema";
import useRegisterUserMutation from "./use-register-user-mutation";

const useRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(registerUserFormSchema),
    mode: "onChange",
  });

  const { createUser, isLoading, isError } = useRegisterUserMutation();

  const onSubmit = (data) => {
    createUser(data);
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

export default useRegisterForm;
