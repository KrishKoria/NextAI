import ChatList from "@/components/chatList";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full gap-12 pt-5">
      <div className="flex-1">
        <ChatList />
      </div>
      <div className="flex-[4] bg-[#12101b]">{children}</div>
    </div>
  );
}
