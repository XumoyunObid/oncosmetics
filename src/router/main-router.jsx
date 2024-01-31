import { Products } from "../pages/products";
import { About } from "../pages/about";
import { Home } from "../pages/home";
import Brand from "../pages/brand/brand";
import Contact from "../pages/contact/contact";
import Buy from "../pages/buy/buy";

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
    component: <Contact/>,
    path: "contact"
  },
{
  component: <Buy />,
  path: "buy"
}

];
