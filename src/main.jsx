import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './Home/Home';
import Body from './Component/Body/Body';
import AllApps from './Component/AllApps/AllApps';
import AppDetail from './AppDetail/AppDetail';
import InstalledPage from './Component/InstalledPage/InstalledPage';
import Error from './Component/Error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Error></Error>,
    Component:Home,
    children:[
      {
        index: true,
        Component:Body,
      },
      {
        path:'/apps',
        Component:AllApps,
      },
      {
        path:'/appDetails/:id',
        Component:AppDetail,
      },
      {
        path:'/installed',
        Component:InstalledPage,
      }
    ]
  },
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
