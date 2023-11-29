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
import Shop from "./pages/Shop";
import { useIsHomePage } from "./store";

const Wrapper = styled.div`
  padding-top: 60px;
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100vh;

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

const routes = [
  { path: "home", element: Home },
  { path: "cart", element: Cart },
  { path: "shop", element: Shop },
  { path: "*", element: NotFound },
];

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}
    >
      {routes.map((route) => (
        <Route
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

function App() {
  return <RouterProvider router={router} />;
}

export default App;
