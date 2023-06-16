import { useMutation } from "react-query";
import CourseService from "../../services/course-service";

const useGetAllCoursesQuery = () => {
  const { data, mutate, isLoading, isError, isSuccess } = useMutation(
    CourseService.getAllcourses,
    ["get-all-courses"]
  );

  const getAllcourses = () => mutate();

  return {
    data,
    getAllcourses,
    isLoading,
    isError,
    isSuccess,
  };
};

export default useGetAllCoursesQuery;
