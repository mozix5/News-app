import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import CardList from "./CardList";

const Home = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <CardList />
      <Outlet />
    </div>
  );
};

export default Home;
