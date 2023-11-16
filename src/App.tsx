import {
  Navigate,
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import styled, { css } from "styled-components";
import Footer from "./blocks/Footer";
import { Navbar } from "./blocks/Navbar";
import "./index.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { useIsHomePage } from "./store";

const Wrapper = styled.div`
  padding-top: 60px;

  ${() => {
    const isHomePage = useIsHomePage((state) => state.isHomePage);

    if (isHomePage) {
      return css`
        padding-top: 0px;
      `;
    }
  }}
`;

function Layout() {
  return (
    <Wrapper>
      <Navbar />
      <Outlet />
      <Footer />
    </Wrapper>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}
    >
      <Route
        path="home"
        element={<Home />}
      />
      <Route
        path="cart"
        element={<Cart />}
      />
      <Route
        path="*"
        element={<NotFound />}
      />
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

function App() {
  return <RouterProvider router={router} />;
}

export default App;
