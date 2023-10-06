import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./Header";
export default function Layout() {
  return (
    <>
      <Header />
      <Container fluid>
        <Outlet />
      </Container>
    </>
  );
}
