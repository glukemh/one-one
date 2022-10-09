// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as hello from '../../functions/api/hello'

type Data = {
  data: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const response = await hello.onRequest({ request: req })
  const json = await response.json()
  res.status(response.status).json(json)
}
