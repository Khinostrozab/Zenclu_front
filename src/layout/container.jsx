import { memo } from "react";
import Nav from "./nav";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

const Container = () => {
  return (
    <>
      <Nav />
      <section className="py-2">
        <Outlet />
      </section>
      <Footer />
    </>
  );
};

export default memo(Container);
