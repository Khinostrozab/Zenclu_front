import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import CourseService from "../../services/course-service";

const useCheckoutCourseMutation = () => {
  const navigate = useNavigate();
  const { data, mutate, isLoading, isError } = useMutation(
    CourseService.checkoutCourse,
    ["checkout-course"]
  );

  const onSuccess = () => {
    navigate("/learning");
  };

  const checkoutCourse = (payload) => mutate(payload, { onSuccess });

  return {
    data,
    checkoutCourse,
    isLoading,
    isError,
  };
};

export default useCheckoutCourseMutation;
