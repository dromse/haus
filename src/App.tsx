import { router } from "@router";
import { RouterProvider } from "react-router-dom";
import "./index.css";

export default function App(): React.JSX.Element {
  return <RouterProvider router={router} />;
}
