import { Schema, model, Document } from "mongoose";

export interface IEntityA extends Document {
  location: string;
  totalSqftAvailable: number;
  pricePerSqft: number;
}

const entityASchema = new Schema<IEntityA>({
  location: { type: String, required: true },
  totalSqftAvailable: { type: Number, required: true },
  pricePerSqft: { type: Number, required: true },
});

export const EntityAModel = model<IEntityA>("EntityA", entityASchema);
