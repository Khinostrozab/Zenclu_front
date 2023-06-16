import { memo } from "react";
import { InputField, Loading } from "../../components/common";
import { ENV } from "../../constants/environment";
import useCheckoutForm from "../../hooks/course/use-checkout-form";

const CourseCheckoutPage = () => {
  const { onSubmit, errors, isValid, register, isSuccess, isLoading, course } =
    useCheckoutForm();

  return (
    <div>
      {isLoading && <Loading />}
      <section className="py-5">
        <div className="container">
          <div className="row gx-5">
            <aside className="col-lg-6">
              <div className="border rounded-4 mb-3 d-flex justify-content-center">
                {isSuccess && (
                  <img
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100vh",
                      margin: "auto",
                    }}
                    className="rounded-4 fit"
                    src={`${ENV.serverUrl}/course/image/${course?.imagePreview}`}
                  />
                )}
              </div>
            </aside>
            <main className="col-lg-6">
              <div className="ps-lg-3">
                <h4 className="title text-dark">{course?.name}</h4>
                <div className="d-flex flex-row my-3">
                  <div className="text-warning mb-1 me-2">
                    <i className="bi-star-fill"></i>
                    <i className="bi-star-fill"></i>
                    <i className="bi-star-fill"></i>
                    <i className="bi-star-fill"></i>
                    <span className="ms-1">4.5</span>
                  </div>
                  <span className="text-success ms-2">In stock</span>
                </div>

                <div className="mb-3">
                  <span className="h5">S/.{course?.price}</span>
                </div>

                <p>{course?.description}</p>

                <div className="row">
                  <dt className="col-3">Autor:</dt>
                  <dd className="col-9">{course?.user.fullName}</dd>

                  <dt className="col-3">Duración</dt>
                  <dd className="col-9">{course?.duration} horas</dd>
                </div>

                <hr />

                <div className="row mb-4">
                  <InputField
                    label="Número de tarjeta"
                    placeholder="Ingrese su número de tarjeta"
                    {...register("cardNumber")}
                    error={errors.cardNumber}
                    maxLength={16}
                  />
                </div>

                <form onSubmit={onSubmit}>
                  <div className="row mb-4">
                    <div className="col-md-6">
                      <InputField
                        label="Fecha de expiración"
                        placeholder="MM/YY"
                        {...register("expiryDate")}
                        error={errors.expiryDate}
                        maxLength={5}
                      />
                    </div>
                    <div className="col-md-6">
                      <InputField
                        label="Cvv"
                        {...register("cvv")}
                        error={errors.cvv}
                        maxLength={3}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-warning btn-lg"
                    disabled={!isValid}
                  >
                    Comprar ahora S/.{course?.price}
                  </button>
                </form>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(CourseCheckoutPage);
