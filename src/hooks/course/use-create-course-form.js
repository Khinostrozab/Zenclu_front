import { useEffect, useState } from "react";
import useFetchCategoriesQuery from "../category/use-fetch-categories-query";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { courseFormSchema } from "../../schemas/course-form-schema";
import useCreateCourseMutation from "./use-create-course-mutation";
import { useAppContext } from "../common";

const useCreateCourseForm = () => {
  const [imagePreview, setImagePreview] = useState();
  const { data: categories, getCategories } = useFetchCategoriesQuery();
  const { createCourse, isLoading } = useCreateCourseMutation();
  const { user } = useAppContext();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(courseFormSchema),
    mode: "onChange",
  });

  useEffect(() => {
    getCategories();
  }, []);

  const handleImagePreviewChange = ({ target }) => {
    const file = target.files[0];
    const url = URL.createObjectURL(file);
    setImagePreview(url);
  };

  const onSubmit = (values) => {
    const {
      imagePreview,
      name,
      description,
      price,
      category,
      duration,
      chapterCount,
    } = values;
    const formData = new FormData();
    formData.append("imagePreview", imagePreview[0]);
    formData.append("course[duration]", duration);
    formData.append("course[name]", name);
    formData.append("course[description]", description);
    formData.append("course[price]", price);
    formData.append("course[chapterCount]", chapterCount);
    formData.append("course[user]", user.id);
    formData.append("course[category]", category);
    createCourse(formData);
  };
  return {
    onSubmit: handleSubmit(onSubmit),
    categories,
    errors,
    isValid,
    handleImagePreviewChange,
    imagePreview,
    register,
    isLoading,
  };
};

export default useCreateCourseForm;
