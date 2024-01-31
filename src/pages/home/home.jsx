import React from "react";
import { Banner } from "./components/banner/banner";
import Bestsellers from "./components/bestsellers/bestsellers";
import List from "./components/list/List";
import Blogs from "./components/blogs/Blogs";

export const Home = () => {
  return (
    <>
      <section>
        <div>
          <Banner />
          <Bestsellers/>
          <List/>
          <Blogs/>
        </div>
      </section>
    </>
  );
};
