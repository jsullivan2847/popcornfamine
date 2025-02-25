import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Technology from './Pages/Technology/Technology';
import Music from './Pages/Music/Music';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
  },
  {
    path: "About",
    element: <About/>,
  },
  {
    path: "Technology",
    element: <Technology/>,
  },
  {
    path: "Music",
    element: <Music/>,
  }
]);

function App() {
  return (
    <div className="page">
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
 