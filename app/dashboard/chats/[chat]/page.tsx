export default function ChatPage({ params }: { params: { chat: string } }) {
  const chatId = params.chat;
  return <div>Chat Page {chatId}</div>;
}
