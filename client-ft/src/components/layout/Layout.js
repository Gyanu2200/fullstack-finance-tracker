import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <Container className="mt-5" style={{ minHeight: "66vh" }}>
        {children}
      </Container>
      <Footer />
    </div>
  );
};
