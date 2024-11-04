import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GlobalProvider } from "../components/context/GlobalContext";

const MainLayout = () => {
  return (
    <GlobalProvider>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />
        {/* Dynamic children component from router */}
        <Outlet />

        {/* Footer */}
        <Footer />
      </div>
    </GlobalProvider>
  );
};

export default MainLayout;
