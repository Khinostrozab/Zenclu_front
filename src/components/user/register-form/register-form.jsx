import { memo } from "react";
import { Link } from "react-router-dom";
import { InputField } from "../../common";
import useRegisterForm from "../../../hooks/user/use-register-form";
import "./register-form.scss";

const RegisterForm = () => {
  const { onSubmit, register, errors, isValid } = useRegisterForm();
  return (
    <div className="container d-flex align-items-center justify-content-center register-form">
      <div className="card col-5">
        <p className="text-center h4 fw-bold mb-5 mx-1 mx-md-4 mt-4">
          Regístrate y comienza a aprender.
        </p>
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <InputField
              type="fullName"
              {...register("fullName")}
              label="Nombre completo"
              error={errors.fullName}
            />
            <InputField
              type="email"
              {...register("email")}
              label="Correo electrónico"
              error={errors.email}
            />
            <InputField
              type="password"
              {...register("password")}
              label="Contraseña"
              error={errors.password}
            />
            <div className="pt-3 register-form__button-container">
              <button
                type="submit"
                className="btn btn-success btn-lg"
                disabled={!isValid}
              >
                Regístrate
              </button>
            </div>
          </form>
          <hr className="hr" />
          <p>
            ¿Ya tienes una cuenta?{" "}
            <Link to="/login" className="text-primary">
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(RegisterForm);
