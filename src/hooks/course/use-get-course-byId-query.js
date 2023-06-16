import { useMutation } from "react-query";
import CourseService from "../../services/course-service";

const useGetCourseByIdQuery = () => {
  const { data, mutate, isLoading, isError, isSuccess } = useMutation(
    CourseService.getCoursesById,
    ["get-coursesby-id"]
  );

  const getCoursesById = (id) => mutate(id);

  return {
    data,
    getCoursesById,
    isLoading,
    isError,
    isSuccess,
  };
};

export default useGetCourseByIdQuery;
