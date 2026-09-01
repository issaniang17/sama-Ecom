import { Route, Routes } from "react-router-dom";
import HomeDashboard from "./pages/home-dashboard/homeDashboard";
import AllProducts from "./pages/home-dashboard/all-products";
import About from "./pages/home-dashboard/about";
import Faq from "./pages/home-dashboard/faq";
import Blog from "./pages/home-dashboard/blog";
import Contact from "./pages/home-dashboard/contact";
import { Toaster } from "sonner";
import Home from "./pages/home-dashboard/home";
import All from "./pages/boutique/All";
import GetOneCategory from "./components/fetchApi/getOneCategory";
import GetOneProduct from "./components/fetchApi/getOneProduct";
import Page404 from "./pages/page404";






const App = () => {
  return (
    <>
   
      <Routes>
        
        <Route element={<HomeDashboard />}>
          <Route index element={<Home />} />
          <Route path="boutique" element={<AllProducts/>}>
            <Route index element={<All/>}/>
            <Route path=":slug" element={<GetOneCategory/>}/>
          </Route>
          <Route path="boutique/:slug/:produit" element={<GetOneProduct/>}/> 
          <Route path="a-propos" element={<About />} />
          <Route path="faq" element={<Faq />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/404" element={<Page404/>}/>
      </Routes>
      <Toaster richColors position="top-center" />
    </>
  );
};

export default App;
