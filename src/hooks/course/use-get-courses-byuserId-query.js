import { useMutation } from "react-query";
import CourseService from "../../services/course-service";

const useGetCoursesByUserId = () => {
  const { data, mutate, isLoading, isError } = useMutation(
    CourseService.getCoursesByUserId,
    ["get-coursesby-userId"]
  );

  const getCoursesById = (userId) => mutate(userId);

  return {
    data,
    getCoursesById,
    isLoading,
    isError,
  };
};

export default useGetCoursesByUserId;
