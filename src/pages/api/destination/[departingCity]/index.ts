import { baseApi } from '@/constants'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const promptText = `Name the three best places to visit from ${req.query.departingCity} in one day.
                      Write the cities as a list. Do not add extra information apart from names.
                    `

  const createChatCompletionReqParams = {
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: promptText }],
  }

  const response = await fetch(baseApi, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + process.env.OPENAI_API_KEY,
    },
    body: JSON.stringify(createChatCompletionReqParams),
  })
    .then((res) => res.json())
    .catch((error) => {
      throw new Error(error)
    })

  if (response.error) {
    return new Error(response.error)
  }

  res.status(200).json(response)
}
