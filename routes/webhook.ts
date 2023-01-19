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
  console.log('Dialogflow Request headers: ' + JSON.stringify(req.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(req.body));

  function welcome(agent: any) {
    agent.add(`Saludos desde el backend con typescript`);
  }

  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);

  agent.handleRequest(intentMap);
});

export default router;