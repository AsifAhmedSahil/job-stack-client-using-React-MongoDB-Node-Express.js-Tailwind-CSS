import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import PostJob from "../Pages/PostJob/PostJob";
import MyJobs from "../Pages/MyJobs/MyJobs";
import SalaryPage from "../Pages/SalaryPage/SalaryPage";
import UpdateJob from "../Pages/UpdateJob/UpdateJob";

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
        },
        {
          path:'/my-job',
          element: <MyJobs/>
        },
        {
          path:'/salary',
          element: <SalaryPage/>
        },
        {
          path:'/edit-job/:id',
          element: <UpdateJob/>,
          loader: ({params}) => fetch(`http://localhost:3000/all-jobs/${params.id}`)
        },
      ]
    },
  ]);

  export default router