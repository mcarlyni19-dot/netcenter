import { getAllFerramentas } from '../models/ferramentas.model.js';

export async function fetchFerramentas(req, res, next) {
  try {
    const ferramentas = await getAllFerramentas();
    res.json(ferramentas);
  } catch (error) {
    next(error);
  }
}
