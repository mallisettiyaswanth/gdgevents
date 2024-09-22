import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddEventPage from "./pages/AddEventPage";
import EventsPage from "./pages/EventsPage";
import MainPage from "./pages/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/events",
        element: <EventsPage />,
      },
      {
        path: "/events/add",
        element: <AddEventPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
