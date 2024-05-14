const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div lang="en">
      <main className="dark:bg-gray-800 min-h-screen">{children}</main>
    </div>
  );
};

export default AdminLayout;
