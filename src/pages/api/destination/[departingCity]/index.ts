import { baseApi } from '@/constants'
import { ChatCompletition } from '@/interfaces/chatCompletition'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<string> | Error>
) {
  const promptText = `Name the three best places to visit from ${req.query.departingCity} in one day.
                      Write the cities as a list, and add a small description for each place.
                    `

  const createChatCompletionReqParams = {
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: promptText }],
  }

  const response: Error | ChatCompletition = await fetch(baseApi, {
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

  if (response instanceof Error) {
    res.status(400).json(response)
    return
  }

  const responseToShow = response.choices[0].message.content.split('\n')

  res.status(200).json(responseToShow)
}
