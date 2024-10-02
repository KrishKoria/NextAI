export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <div className="">MENU</div>
      <div className="">{children}</div>
    </div>
  );
}
