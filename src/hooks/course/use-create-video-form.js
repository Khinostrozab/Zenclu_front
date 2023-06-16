import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { videoFormSchema } from "../../schemas/video-form-schema";
import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import useCreateVideoCourseMutation from "./use-create-video-course-mutation";

const useCreateVideoForm = () => {
  const [source, setSource] = useState();
  const [duration, setDuration] = useState();
  const videoEl = useRef(null);
  const { courseId } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(videoFormSchema),
    mode: "onChange",
  });

  const { isLoading, createVideoCourse } = useCreateVideoCourseMutation();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setSource(url);
  };

  const handleLoadedMetadata = () => {
    const video = videoEl.current;
    if (!video) return;
    setDuration(video.duration);
  };

  const onSubmit = (data) => {
    const { video, name, description } = data;

    const formData = new FormData();
    formData.append("video", video[0]);
    formData.append("video[duration]", duration);
    formData.append("video[name]", name);
    formData.append("video[description]", description);
    formData.append("video[courseId]", String(courseId));
    createVideoCourse(formData);
  };

  return {
    onSubmit: handleSubmit(onSubmit),
    errors,
    isValid,
    register,
    handleFileChange,
    source,
    videoEl,
    handleLoadedMetadata,
    duration,
    isLoading,
  };
};

export default useCreateVideoForm;
