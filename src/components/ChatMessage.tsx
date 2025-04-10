
import { cn } from "@/lib/utils"

interface ChatMessageProps {
  message: {
    role: 'user' | 'assistant'
    content: string
  }
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user'
  
  return (
    <div className={cn(
      "flex w-full items-start gap-4 p-4",
      isUser ? "bg-white" : "bg-gray-50"
    )}>
      <div className={cn(
        "flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border shadow",
        isUser ? "bg-blue-600 text-white" : "bg-white"
      )}>
        {isUser ? 'U' : 'AI'}
      </div>
      <div className="flex-1 space-y-2">
        <div className="prose prose-sm max-w-none">
          <p className="whitespace-pre-wrap">{message.content}</p>
        </div>
      </div>
    </div>
  )
}