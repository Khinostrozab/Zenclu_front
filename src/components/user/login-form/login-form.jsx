import { memo } from "react";
import { InputField } from "../../common";
import { Link } from "react-router-dom";
import { useLoginForm } from "../../../hooks/user";
import "./login-form.scss";

const LoginForm = () => {
  const { onSubmit, register, errors, isValid, isError } = useLoginForm();

  return (
    <div className="container d-flex align-items-center justify-content-center login-form">
      <div className="card col-5 rounded">
        <p className="text-center h4 fw-bold mb-5 mx-1 mx-md-4 mt-4">
          Inicia sesión en tu cuenta
        </p>

        <div className="card-body">
          <form onSubmit={onSubmit}>
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
            <div className="pt-3 login-form__button-container">
              <button
                type="submit"
                className="btn btn-success btn-lg"
                disabled={!isValid}
              >
                Iniciar sesión
              </button>
            </div>
          </form>
          {isError && (
            <div className="alert alert-danger mb-0 mt-2" role="alert">
              Credenciales incorrectas.
            </div>
          )}
          <hr className="hr" />
          <p>
            ¿No tienes una cuenta? <Link to="/register">Regístrate aquí.</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(LoginForm);
