import { Home } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { List } from "./pages/list";
import { Layout } from "./layout";
import { Single } from "./pages/single";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/list", element: <List /> },
        {
          path: "/:id",
          element: <Single />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
