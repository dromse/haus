import Footer from "@components/blocks/Footer";
import { Navbar } from "@components/blocks/Navbar";
import { ROUTES } from "@consts/routes";
import {
  Navigate,
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 60px;
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100vh;
`;

function Layout(): React.JSX.Element {
  return (
    <Wrapper>
      <Navbar />
      <Outlet />
      <Footer />
    </Wrapper>
  );
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}
    >
      {ROUTES.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.element />}
        />
      ))}

      <Route
        path="/"
        element={
          <Navigate
            to="/home"
            replace
          />
        }
      />
    </Route>,
  ),
);
