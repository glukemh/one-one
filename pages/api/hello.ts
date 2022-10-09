// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { IncomingHttpHeaders } from 'http'
import type { NextApiRequest, NextApiResponse } from 'next'
import * as hello from '../../functions/api/hello'

type Data = {
  data: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const context: EventContext<any, string, any> = {
    request: new Request(`http://${req.headers.host}${req.url}`, {
      method: req.method,
      body: req.body || undefined,
      headers: new Headers(req.headers as HeadersInit),
    }),
    env: req.env,
    functionPath: req.url || '',
    waitUntil: () => {},
    params: {},
    next: async () => new Response(),
    data: {},
  }
  const response = await hello.onRequest(context)
  const json = (await response.json()) as { data: string }
  res.status(response.status).json(json)
}
