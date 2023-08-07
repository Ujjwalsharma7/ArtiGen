import Navbar from "@/components/Navbar";
import Sidebar from "@/components/ui/Sidebar";

const DahboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:flex-col md:w-72 md:fixed bg-slate-600 md:inset-y-0 z-[80]">
        <Sidebar />
      </div>
      <main className="md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DahboardLayout;
