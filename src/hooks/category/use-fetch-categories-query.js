import { useMutation } from "react-query";
import { CatgoryService } from "../../services";

const useFetchCategoriesQuery = () => {
  const { data, isLoading, isError, mutate } = useMutation(
    CatgoryService.getAllCatgories,
    ["get-categories"]
  );

  const getCategories = () => mutate();

  return {
    data,
    getCategories,
    isLoading,
    isError,
  };
};

export default useFetchCategoriesQuery;
