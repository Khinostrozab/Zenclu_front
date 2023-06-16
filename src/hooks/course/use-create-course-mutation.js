import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import CourseService from "../../services/course-service";

const useCreateCourseMutation = () => {
  const navigate = useNavigate();
  const { data, mutate, isLoading, isError } = useMutation(
    CourseService.createCourse,
    ["create-course"]
  );

  const onSuccess = () => {
    navigate("/courses");
  };

  const createCourse = (payload) => mutate(payload, { onSuccess });

  return {
    data,
    createCourse,
    isLoading,
    isError,
  };
};

export default useCreateCourseMutation;
