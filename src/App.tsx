import { Route, Routes } from "react-router-dom"
import HomeDashboard from "./components/home-dashboard/homeDashboard"
import AllProducts from "./components/home-dashboard/all-products"
import About from "./components/home-dashboard/about"
import Faq from "./components/home-dashboard/faq"
import Blog from "./components/home-dashboard/blog"
import Contact from "./components/home-dashboard/contact"
import {Toaster} from 'sonner'
import Home from "./components/home-dashboard/home"

const App = () => {
  return (
    <>
   <Routes>
    <Route  element={<HomeDashboard/>}>
    <Route index element={<Home/>}/>
    <Route path="boutique" element={<AllProducts/>}/>
    <Route path="a-propos" element={<About/>}/>
    <Route path="faq" element={<Faq/>}/>
    <Route path="blog" element={<Blog/>}/>
    <Route path="contact" element={<Contact/>}/>
    </Route>
   </Routes>
   <Toaster richColors position="top-center"/>
   </>
  )
}

export default App