import { createBrowserRouter } from "react-router-dom";
import Root from "../../layout/Root";
import Home from "../../pages/Home/Home";
import AboutWithBanner from "../../pages/About/AboutWithBanner";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import EventsWithBanner from "../../pages/Events/EventsWithBanner";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import EventDetails from "../../pages/EventDetails/EventDetails";


const route = createBrowserRouter(

    [
        {
            path: "/",
            element: <Root></Root>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>,
                    // loader: () => fetch('/news.json')
                },
                // {
                //     path: '/news/:id',
                //     element: <PrivateRoutes>
                //         <NewsDetailsPage></NewsDetailsPage>
                //     </PrivateRoutes>
                // },
                {
                    path: '/about',
                    element: <AboutWithBanner></AboutWithBanner>
                },
                {
                    path: '/events',
                    element: <EventsWithBanner></EventsWithBanner>,
                    loader: () => fetch('./event_data.json')
                        .then(response => response.json())
                        .then(data => { return (data) })
                },
                {
                    path: '/event/:id',
                    element: <EventDetails></EventDetails>,
                    loader: () => fetch('../event_data.json')
                },
                {
                    path: '/enroled',
                    element: <PrivateRoute>
                        <EventDetails></EventDetails>
                    </PrivateRoute>,
                    loader: () => fetch('../event_data.json')
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



export default route;