import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import PostJob from "../Pages/PostJob/PostJob";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/about',
            element: <About/>
        },
        {
          path:'/post-job',
          element: <PostJob/>
        }
      ]
    },
  ]);

  export default router