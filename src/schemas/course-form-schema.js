import { object, string } from "yup";

const digitsAndDecimalOnly = (value) =>
  /^\d*[\.{1}\d*]\d*$/.test(value) || value.length === 0;
const digitsOnly = (value) => /^\d+$/.test(value);

export const courseFormSchema = object({
  name: string().required("El campo es requerido"),
  description: string().required("La campo es requerido"),
  price: string()
    .required("La campo es requerido")
    .test(
      "Digits only",
      "Solo se permite valores númericos",
      digitsAndDecimalOnly
    ),
  duration: string()
    .required("La campo es requerido")
    .test("Digits only", "Solo se permite valores númericos", digitsOnly),
  chapterCount: string()
    .required("La campo es requerido")
    .test("Digits only", "Solo se permite valores númericos", digitsOnly),
  // imagePreview: string().required("File is required"),
  category: string().required("La campo es requerido"),
}).required();
