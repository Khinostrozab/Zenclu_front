import { memo } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const RouterOutled = () => {
  return (
    <section className="py-5">
      <RouterProvider router={router} />
    </section>
  );
};

export default memo(RouterOutled);
