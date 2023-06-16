import { object, string } from "yup";

export const registerUserFormSchema = object({
  fullName: string().required("El nombre es requerido"),
  email: string()
    .required("El correo es requerido")
    .email("No es un correo valido."),
  password: string().required("La contraseña es requerida"),
}).required();
