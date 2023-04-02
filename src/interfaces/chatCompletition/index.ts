interface Message {
  role: string
  content: string
}

interface Choice {
  finish_reason: string
  index: number
  message: Message
}

export interface ChatCompletition {
  choices: Array<Choice>
  created: number
  id: string
  model: string
  object: string
  usage: {
    completion_tokens: number
    prompt_tokens: number
    total_tokens: number
  }
}
