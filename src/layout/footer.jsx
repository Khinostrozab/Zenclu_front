import { memo } from "react";

const Footer = () => (
  <footer className=" bg-dark fixed-bottom" style={{ marginTop: "250px" }}>
    <div className="container">
      <p className="m-0 text-center text-white">
        Copyright &copy; Your Website 2023
      </p>
    </div>
  </footer>
);

export default memo(Footer);
