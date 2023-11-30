import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Events from "../pages/Events/Events";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import About from "../pages/About/About";
import EventDetail from "../pages/Events/EventDetail";
import PrivateRoute from "./PrivateRoutes";
import BookedEvent from "../pages/BookedEvent/BookedEvent";
import Sponsors from "../pages/Sponsors/Sponsors";
import Speakers from "../pages/Speakers/Speakers";
import Blogs from "../pages/Blogs/Blogs";
import LatestBlog from "../pages/BlogesLatest/LatestBlog";
import Error from "../pages/Error/Error";
import Contact from "../pages/Contact/Contact";
import ConstrucPages from "../pages/ConstructionPages/ConstrucPages";
import ProtectedRoutes from "./ProtectedRoutes";
import SpeakerDetails from "../pages/Speakers/SpeakerDetails";
import BlogDetails from "../pages/Blogs/BlogDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
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
                element: <PrivateRoute>
                    <EventDetail></EventDetail>
                </PrivateRoute>,
                loader: () => fetch('/event_data.json')
            },
            {
                path: '/booked/:id',
                element: <PrivateRoute>
                    <BookedEvent></BookedEvent>
                </PrivateRoute>,
                loader: () => fetch('/event_data.json')
            },
            {
                path: '/speakers',
                element: <Speakers></Speakers>

            },
            {
                path: '/speaker/:id',
                element: <SpeakerDetails></SpeakerDetails>,
                loader: () => fetch('/speakers.json')
            },
            {
                path: '/blog',
                element: <Blogs></Blogs>
            },
            {
                path: '/blog/:id',
                element: <PrivateRoute>
                    <BlogDetails></BlogDetails>
                </PrivateRoute>,
                loader: () => fetch('./blogs.json')
            },
            {
                path: '/letestBlog',
                element: <LatestBlog></LatestBlog>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/sponsors',
                element: <Sponsors></Sponsors>
            },
            {
                path: '/login',
                element: <ProtectedRoutes>
                    <Login></Login>
                </ProtectedRoutes>
            },
            {
                path: '/register',
                element: <ProtectedRoutes>
                    <Register></Register>
                </ProtectedRoutes>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/undcons',
                element: <ConstrucPages></ConstrucPages>
            },

        ]
    },
]);

export default router;