import Navbar from "@/components/Navbar";
interface IAuthLayout {
  children: React.ReactNode;
}
const HomeLayout: React.FC<IAuthLayout> = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full">
      <div className="md:flex-1">
        <Navbar />
      </div>
      <div className="flex-[3]">
        {children}
        </div>
      </div>
  );
};

export default HomeLayout;