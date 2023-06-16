import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { checkoutFormSchema } from "../../schemas/checkout-form-schema";
import { useParams } from "react-router-dom";
import useGetCourseByIdQuery from "./use-get-course-byId-query";
import { useEffect } from "react";
import useCheckoutCourseMutation from "./use-checkout-course-mutation";
import { useAppContext } from "../common";

const useCheckoutForm = () => {
  const { id } = useParams();
  const { user } = useAppContext();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(checkoutFormSchema),
    mode: "onChange",
  });

  const {
    getCoursesById,
    isLoading,
    data: course,
    isSuccess,
  } = useGetCourseByIdQuery();
  useEffect(() => {
    getCoursesById(id);
  }, []);

  const { checkoutCourse, isLoading: loadingCheckout } =
    useCheckoutCourseMutation();

  const onSubmit = (data) => {
    checkoutCourse({
      ...data,
      course: id,
      user: user.id,
    });
  };

  return {
    onSubmit: handleSubmit(onSubmit),
    errors,
    isValid,
    register,
    isLoading: isLoading || loadingCheckout,
    course,
    isSuccess,
  };
};

export default useCheckoutForm;
