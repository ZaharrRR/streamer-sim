type ChatMessageStatus = 'BAD' | 'GOOD'

interface ChatMessage {
  username: string
  text: string
  status: ChatMessageStatus
}

interface Stream {
  title: string
  content: string
  views: number
  rating: number
}

export type { ChatMessage, ChatMessageStatus, Stream }
