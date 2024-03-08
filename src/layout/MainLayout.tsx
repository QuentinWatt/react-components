import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <div className="bg-white">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
