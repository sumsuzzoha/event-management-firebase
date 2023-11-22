import { createBrowserRouter } from "react-router-dom";
import Root from "../../layout/Root";
import Home from "../../pages/Home/Home";
import AboutWithBanner from "../../pages/About/AboutWithBanner";


const route = createBrowserRouter([
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
            // {
            //     path: '/login',
            //     element: <Login></Login>
            // },
            // {
            //     path: '/register',
            //     element: <Register></Register>
            // }
        ]
    },
]);



export default route;