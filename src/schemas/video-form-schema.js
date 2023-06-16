import { object, string } from "yup";

export const videoFormSchema = object({
  name: string().required("El campo es requerido"),
  description: string().required("La campo es requerido"),
}).required();
