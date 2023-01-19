import { Router, Request, Response } from "express";
import { WebhookClient } from 'dialogflow-fulfillment';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({
    msg: 'Saludos desde el backend - GET method'
  });
});

router.post('/', (req: Request, res: Response) => {


  // process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements

  const agent = new WebhookClient({ request: req, response: res });
  console.log('INTENTO: ', agent.intent.trim() );

  const welcome = (agent: any) =>  {
    agent.add(`Saludos desde el backend con typescript`);
  }

  const buscandoDepartamentosCucei = (agent: any) =>  {
    agent.add(`Saludos desde el backend con typescript`);
  }

  let intentMap = new Map();
  intentMap.set('webhook_test', welcome);

  agent.handleRequest(intentMap);
});

export default router;