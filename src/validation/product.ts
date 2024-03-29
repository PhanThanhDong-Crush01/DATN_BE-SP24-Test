import joi from "joi";

export const productSchema = joi.object({
  name: joi.string().required(),
  image: joi.string().required(),
  import_date: joi.date().required(),
  expiry: joi.any().required(),
  status: joi.boolean(),
  description: joi.string(),
  idCategory: joi.string().required(),
});

export const typeProductSchema = joi.object({
  size: joi.string().required(),
  color: joi.string().required(),
  quantily: joi.number().required(),
  image: joi.string().required(),
  weight: joi.number().required(),
  price: joi.number().required(),
  idPro: joi.string().required(),
});

// // export const categoryProductSchema = joi.object().shape({
// //     name: joi.string().trim().required(),
// //     description: joi.string().required(),
// //     products: joi.array().of(
// //         joi
// //             .string()
// //             // regular expression để validate ObjectId.
// //             //
// //             .matches(/^[0-9a-fA-F]{24}$/)
// //             .required()
// //     ),
// // });
