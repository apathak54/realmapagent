import { Schema, model, Document } from "mongoose";

export interface IEntity extends Document {
  name : string ;
  location: string;
  totalSqftAvailable: number;
  pricePerSqft: number;
  totalPrice : number ;
  threeYear: number,
  fiveYear: number,
  sevenYear: number
}

const entitySchema = new Schema<IEntity>({
  name: {type:String , required : true},
  location: { type: String, required: true },
  totalSqftAvailable: { type: Number, required: true },
  pricePerSqft: { type: Number, required: true },
  totalPrice : { type: Number , required: true },
  threeYear: { type: Number, required: true },
  fiveYear: { type: Number, required: true },
  sevenYear: { type: Number, required: true }

});

export const Entity = model<IEntity>("Entity", entitySchema);
