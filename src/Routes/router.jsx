import { createBrowserRouter } from "react-router";
import MainLayout from '../Layouts/Mainlayout';
import Home from '../Pages/Home';
const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      }
    ]
  },
]);

export default router;