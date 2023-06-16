import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import CourseService from "../../services/course-service";

const useCreateVideoCourseMutation = () => {
  const navigate = useNavigate();
  const { data, mutate, isLoading, isError } = useMutation(
    CourseService.createVideoByCourseId,
    ["create-video-course"]
  );

  const onSuccess = () => {
    navigate("/courses");
  };

  const createVideoCourse = (payload) => mutate(payload, { onSuccess });

  return {
    data,
    createVideoCourse,
    isLoading,
    isError,
  };
};

export default useCreateVideoCourseMutation;
