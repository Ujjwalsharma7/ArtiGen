import Navbar from "@/components/Navbar";

const DahboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:flex-col md:w-72 md:fixed md:inset-y-0 z-[80] bg-purple-950">
        <div>Sidebaar hhehehhe</div>
      </div>
      <main className="md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DahboardLayout;
