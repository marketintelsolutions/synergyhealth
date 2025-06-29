import React, { JSX, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useParams } from "react-router-dom";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { pathname, hash } = window.location;
  console.log("pathname", window.location);

  const params = useParams();

  useEffect(() => {
    if (hash) return;
    window.scroll(0, 0);
  }, [pathname, params, hash]);

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
