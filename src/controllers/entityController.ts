import { Request, Response } from 'express';
import { Entity } from '../models/Entity';


export const getAllEntity = async (_: Request, res: Response) => {
  try {
    const data = await Entity.find();
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

export const createEntity = async (req: Request, res: Response) => {
  try {
    const newItem = new Entity(req.body);
    const saved = await newItem.save();
    res.status(201).json({ success: true, data: saved });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};


export const updateEntity = async (req: Request, res: Response) => {
    try {
      const updated = await Entity.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json({ success: true, data: updated });
    } catch (error) {
      res.status(500).json({ success: false, error });
    }
  };
  
  // Add in entityController.ts
export const deleteEntity = async (req: Request, res: Response) => {
    try {
      await Entity.findByIdAndDelete(req.params.id);
      res.json({ success: true, message: 'Entity deleted' });
    } catch (error) {
      res.status(500).json({ success: false, error });
    }
  };
  