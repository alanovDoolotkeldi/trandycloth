import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import LoginPage from "../pages/loginPage/LoginPage";
import CardItemPage from "../pages/cardItemPage/CardItemPage";
import BasketPage from "../pages/basketPage/BasketPage";
export const router = createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<HomePage/>

            },
            {
                path:"/about",
                element:<AboutPage/>
            },
            {
                path:"/login",
                element:<LoginPage/>
            },
            {
                path:"/carditem",
                element:<CardItemPage/>
            },
            {
                path:"/basket",
                element:<BasketPage/>
            },
        ]
    }
    

])