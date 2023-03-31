import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Album } from "./pages/Album";
import { Home } from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/album",
    element: <Album />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
