import { Products } from "../pages/products";
import { About } from "../pages/about";
import { Home } from "../pages/home";
import Brand from "../pages/brand/brand";
import Contact from "../pages/contact/contact";
<<<<<<< HEAD
import Questions from "../pages/faq/Questions";
=======
import Buy from "../pages/buy/buy";
>>>>>>> c28e05ff030bb84779d7cf8c16b539a97481bc68

export const main_pages = [
  {
    component: <Home />,
  },
  {
    component: <About />,
    path: "about",
  },
  {
    component: <Products />,
    path: "products",
  },
  {
    component: <Brand/>,
    path: "brand"
  },
  {
    component: <Questions/>,
    path: "questions"
  },
  {
    component: <Contact/>,
    path: "contact"
  },
{
  component: <Buy />,
  path: "buy"
}

];
