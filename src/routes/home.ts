import { Router, Request, Response } from "express";

const router = Router();

router.get('/', ( req: Request, res: Response ) => {
  res.json({
    msg: 'Saludos desde el backend'
  });
});

export default router;