import { memo } from "react";
import { InputField, Loading } from "../../components/common";
import useCreateVideoForm from "../../hooks/course/use-create-video-form";

const CreateVideoPage = () => {
  const {
    onSubmit,
    register,
    errors,
    isValid,
    handleFileChange,
    source,
    videoEl,
    handleLoadedMetadata,
    isLoading,
  } = useCreateVideoForm();
  return (
    <div>
      {isLoading && <Loading />}
      <div className="container d-flex align-items-center justify-content-center login-form">
        <div className="card col-6 rounded">
          <p className="text-center h4 fw-bold mb-5 mx-1 mx-md-4 mt-4">
            Agrega un episodio al curso
          </p>
          <div className="card-body">
            <form onSubmit={onSubmit}>
              <InputField
                {...register("name")}
                label="Nombre del capitulo"
                error={errors.name}
              />
              <InputField
                {...register("description")}
                label="Descripción"
                error={errors.description}
              />

              <div className="mb-3 pt-3">
                <label className="form-label">Video</label>
                <input
                  type="file"
                  placeholder="Select video"
                  className="form-control"
                  {...register("video", {
                    required: "Video is required",
                    onChange: (e) => handleFileChange(e),
                  })}
                  accept=".mov,.mp4"
                />
              </div>
              {source && (
                <div className="card px-2 py-2 mt-2">
                  <video
                    width="100%"
                    height={272}
                    controls
                    src={source}
                    ref={videoEl}
                    onLoadedMetadata={handleLoadedMetadata}
                  />
                </div>
              )}

              <div className="pt-3 d-grid gap-2">
                <button
                  type="submit"
                  className="btn btn-success btn-lg"
                  disabled={!isValid}
                >
                  Crear video
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(CreateVideoPage);
