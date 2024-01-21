import Home from "./pages/Home";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import JobDetails from "./pages/JobDetails";

const App = () => {

    const router = createBrowserRouter([
        {
            element : <Home/>,
            path : "/"
        },
        {
            element : <JobDetails/>,
            path : "/:id"
        }
    ])

    return (<>
        <RouterProvider router={router}/>
    </>);
}
 
export default App;