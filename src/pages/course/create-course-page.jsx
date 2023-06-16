import { memo } from "react";
import { InputField } from "../../components/common";
import { useCreateCourseForm } from "../../hooks/course";

const CreateCoursePage = () => {
  const {
    categories,
    errors,
    isValid,
    handleImagePreviewChange,
    imagePreview,
    register,
    onSubmit,
  } = useCreateCourseForm();
  return (
    <div>
      <div className="container d-flex align-items-center justify-content-center login-form">
        <div className="card col-6 rounded">
          <p className="text-center h4 fw-bold mb-5 mx-1 mx-md-4 mt-4">
            Inicia sesión en tu cuenta
          </p>
          <div className="card-body">
            <form onSubmit={onSubmit}>
              <InputField
                {...register("name")}
                label="Nombre del curso"
                error={errors.name}
              />
              <InputField
                {...register("description")}
                label="Descripción"
                error={errors.description}
              />
              <InputField
                {...register("price")}
                label="Precio"
                error={errors.price}
              />
              <InputField
                {...register("duration")}
                label="Cantidad de horas"
                error={errors.duration}
              />
              <InputField
                {...register("chapterCount")}
                label="Número de episodios"
                error={errors.chapterCount}
              />
              <div className="mb-3 py-3">
                <label className="form-label">Categoria</label>
                <select
                  className="form-select form-select-lg"
                  {...register("category")}
                >
                  {categories &&
                    categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Portada</label>
                <input
                  type="file"
                  placeholder="Select video"
                  className="form-control"
                  {...register("imagePreview", {
                    required: "Image is required",
                    onChange: (e) => handleImagePreviewChange(e),
                  })}
                  accept=".png, .jpg, .jpeg"
                />
              </div>
              {imagePreview && (
                <div className="card px-2 py-2 mt-2">
                  <img
                    src={imagePreview}
                    alt="image"
                    width="100%"
                    height={272}
                  />
                </div>
              )}

              <div className="pt-3 d-grid gap-2">
                <button
                  type="submit"
                  className="btn btn-success btn-lg"
                  disabled={!isValid}
                >
                  Crear curso
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(CreateCoursePage);
