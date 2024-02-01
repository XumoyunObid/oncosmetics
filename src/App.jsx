import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { nanoid } from "nanoid";
import { main_pages } from "./router/main-router";
import Blogs from "./pages/home/components/blogs/Blogs";

// import { About } from "./pages/about";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {main_pages.map((route) => (
            <Route
              index={route.path ? false : true}
              key={nanoid()}
              path={route.path}
              element={route.component}
            />
          ))}
          <Route path="blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;