import Navbar from "@/components/main/navbar";

export const metadata = {
  title: "Dashboard",
  description: "Online bookmark webapp.",
};

export default function HomeLayout({ children }) {
  return (
    <div className="h-screen w-full flex justify-start  flex-nowrap items-start">
      <div className="p-4 w-16 h-full bg-cyan-100 border-0">
        <Navbar />
      </div>
      <div className="h-full w-full">{children}</div>
    </div>
  );
}
