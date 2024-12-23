import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PropertyDetails from "../pages/PropertyDetails";

export default function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route index element = {<Home/>}/>
                <Route path = "/:id" element = {<PropertyDetails/>}/>
            </Routes>
        </Router>
    );
}