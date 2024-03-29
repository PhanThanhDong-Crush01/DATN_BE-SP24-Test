import mongoose from "mongoose";
// import { IProduct } from "../interfaces/product";

const typeProductSchema = new mongoose.Schema<any>(
  {
    color: { type: String, required: true },
    size: { type: String, required: true },
    quantily: { type: Number, required: true },
    image: { type: String, required: true },
    weight: { type: Number, required: true },
    price: { type: Number, required: true },
    idPro: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

const TypeProductModel = mongoose.model<any>("TypeProduct", typeProductSchema);
export default TypeProductModel;
