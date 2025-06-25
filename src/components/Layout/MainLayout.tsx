import React, { JSX, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useParams } from "react-router-dom";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { pathname } = window.location;
  const params = useParams();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname, params]);

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
