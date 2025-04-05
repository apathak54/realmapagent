import { Schema, model, Document } from "mongoose";

export interface IEntity extends Document {
  name : string ;
  location: string;
  totalSqftAvailable: number;
  pricePerSqft: number;
}

const entitySchema = new Schema<IEntity>({
  name: {type:String , required : true},
  location: { type: String, required: true },
  totalSqftAvailable: { type: Number, required: true },
  pricePerSqft: { type: Number, required: true },
});

export const Entity = model<IEntity>("Entity", entitySchema);
