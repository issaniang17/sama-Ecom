import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";


const HomeDashboard = () => {

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 xl:w-[80%] xl:flex xl:flex-col xl:mx-auto">
      {/* Navigation */}
      <header>
        <Navbar />
      </header>
      {/* main */}
      <main>
        <Outlet />
      </main>
      {/* footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeDashboard;
