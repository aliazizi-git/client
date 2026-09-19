import { createBrowserRouter } from "react-router";
import Layout from "../Layout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Products from "../Pages/Products";
import ProductDetails from "../Pages/ProductDetails";
import Profile from "../Pages/Profile";
import Auth from "../Pages/Auth";
import Protected from "../Layout/Protected";
import NotFound from "../Pages/NotFound";
const router =createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: 'products/:categoryId/:categoryName',
                element: <Products/>
            },
            {
                path: 'productDetails/:id/:categoryTitle',
                element: <ProductDetails/>
            },
            {
                path: 'auth',
                element: <Auth/>
            },
            {
                element: <Protected/>,
                children:[
                    {
                        path:'cart',
                        element: <Cart/>
                    },
                    {
                        path: 'profile',
                        element:<Profile/>
                    }
                ]
            },
            {path:"*",element:<NotFound/>}
        ]
    }
])
export default router