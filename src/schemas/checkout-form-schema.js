import { object, string } from "yup";

export const checkoutFormSchema = object({
  cardNumber: string().min(16).required("El valor es requerido"),
  expiryDate: string()
    .typeError("Fecha invalida. Ejemplo: MM/YY")
    .max(5, "Fecha invalida. Ejemplo: MM/YY")
    .matches(/([0-9]{2})\/([0-9]{2})/, "Fecha invalida. Ejemplo: MM/YY")
    .required("El valor es requerido"),
  cvv: string().min(3).required("El valor es requerido"),
}).required();
