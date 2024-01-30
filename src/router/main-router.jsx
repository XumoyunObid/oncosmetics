import { Products } from "../pages/products";
import { About } from "../pages/about";
import { Home } from "../pages/home";
import Brand from "../pages/brand/brand";

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
  }
];
