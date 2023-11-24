import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Events from "../pages/Events/Events";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import About from "../pages/About/About";
import EventDetail from "../pages/Events/EventDetail";
import PrivateRoute from "./PrivateRoutes";
// import Enroled from "../pages/Enroled/Enroled";
import BookedEvent from "../pages/BookedEvent/BookedEvent";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/events',
                element: <Events></Events>
            },
            {
                path: '/event/:id',
                element: <EventDetail></EventDetail>,
                loader: () => fetch('/event_data.json')
            },
            {
                path: '/booked/:id',
                element: <PrivateRoute>
                    <BookedEvent></BookedEvent>
                </PrivateRoute>,
                loader:() => fetch('/event_data.json')
            },
            // {
            //     path: '/enroled/:id',
            //     element: <PrivateRoute>
            //         <Enroled></Enroled>
            //     </PrivateRoute>,
            //     loader:() => fetch('/event_data.json')
            // },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
]);

export default router;