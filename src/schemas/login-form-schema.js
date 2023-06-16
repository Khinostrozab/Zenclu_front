import { object, string } from "yup";

export const loginFormSchema = object({
  email: string()
    .required("El correo es requerido")
    .email("No es un correo valido."),
  password: string().required("La contraseña es requerida"),
}).required();
