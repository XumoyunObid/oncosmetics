import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { nanoid } from "nanoid";
import { main_pages } from "./router/main-router";
import { user_pages } from "./router/user-router";
import { UserLayout } from "./layout/user-layout";

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
          <Route path="user" element={<UserLayout />}>
            {user_pages.map((route) => (
              <Route
                key={nanoid()}
                index={route.path ? false : true}
                path={route.path}
                element={route.component}
              />
            ))}
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
