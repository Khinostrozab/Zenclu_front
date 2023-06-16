import { useMutation } from "react-query";
import CourseService from "../../services/course-service";

const useGetCheckoutCoursesByUserIdQuery = () => {
  const { data, mutate, isLoading, isError, isSuccess } = useMutation(
    CourseService.getCheckoutCoursesByUserId,
    ["get-checkout-courses-userId"]
  );

  const getCheckoutCoursesByUserId = (userId) => mutate(userId);

  return {
    data,
    getCheckoutCoursesByUserId,
    isLoading,
    isError,
    isSuccess,
  };
};

export default useGetCheckoutCoursesByUserIdQuery;
